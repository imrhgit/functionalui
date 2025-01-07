"use client";
import { useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { FC, ReactNode, createContext, useContext, useState } from "react";
import useMeasure from "react-use-measure";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import clamp from "../lib/lodash_clamp";

type GalleryContextType = {
  galleryImages: Array<any>;
  imgIndex: number;
  props: any;
  ref: any;
  bind: any;
  isZooming: boolean;
  manualZoomScale: number;
  handleSetImages: (v: Array<any>) => void;
  handleCloseGallery: (v?: () => void) => void;
  handleIncrease: (v?: any) => void;
  handleDecrease: (v?: any) => void;
  handleSetIsZooming: (v?: any) => void;
  handleZoomIn: (v?: any) => void;
  handleZoomOut: (v?: any) => void;
  handleZoomReset: (v?: any) => void;
};
// eslint-disable-next-line no-var
var v: any;
const GalleryContext = createContext<GalleryContextType>({
  galleryImages: v,
  imgIndex: 0,
  props: v,
  ref: v,
  bind: v,
  isZooming: v,
  manualZoomScale: v,
  handleSetImages: v,
  handleCloseGallery: v,
  handleIncrease: v,
  handleDecrease: v,
  handleSetIsZooming: v,
  handleZoomIn: v,
  handleZoomOut: v,
  handleZoomReset: v,
});
interface P {
  children: ReactNode;
}
export const ProvideGalleryContext: FC<P> = ({ children }) => {
  const value = useSetContext();
  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};

function useSetContext(): GalleryContextType {
  const [galleryImages, setGalleryImages] = useState<Array<any>>([]);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [ref, { width }] = useMeasure();
  const [isZooming, setIsZooming] = useState(false);
  // const [first, setfirst] = useState(second)

  const [props, api] = useSprings(
    galleryImages.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width],
  );

  // const bind: any = useDrag(({ active, movement: [mx], direction: [xDir], distance: [dX], cancel }) => {
  //   if (isZooming) return
  //   if (active && dX > width / 2) {
  //     setImgIndex((prev: number) => clamp(prev + (xDir > 0 ? -1 : 1), 0, galleryImages.length - 1))
  //     cancel()
  //   }
  //   api.start(i => {
  //     if (i < imgIndex - 1 || i > imgIndex + 1) return { display: 'none' }
  //     const x = (i - imgIndex) * width + (active ? mx : 0)
  //     const scale = active ? 1 - dX / width / 2 : 1
  //     return { x, scale, display: 'block' }
  //   })
  // })
  const bind: any = useDrag(
    ({
      active,
      movement: [mx],
      velocity: [vx],
      direction: [xDir],
      distance: [dX],
      cancel,
    }) => {
      if (isZooming) return;
      if (active && (dX > width / 3 || vx > 1)) {
        setImgIndex((prev: number) =>
          clamp(prev + (xDir > 0 ? -1 : 1), 0, galleryImages.length - 1),
        );
        cancel();
      }
      api.start((i) => {
        if (i < imgIndex - 1 || i > imgIndex + 1) return { display: "none" };
        const x = (i - imgIndex) * width + (active ? mx : 0);
        const scale = active ? 1 - dX / width / 2 : 1;
        return { x, scale, display: "block" };
      });
    },
  );

  const handleSetImages = (arr: Array<any>) => {
    setGalleryImages(arr);
  };

  const handleCloseGallery = (closeModal?: () => void) => {
    setImgIndex(0);
    if (closeModal) {
      closeModal();
    }
  };

  function handleIncrease() {
    setImgIndex((prev) => {
      if (prev + 1 > galleryImages.length - 1) return prev;
      api.start((i) => {
        if (i < prev + 1 - 1 || i > prev + 1 + 1) return { display: "none" };
        const x = (i - (prev + 1)) * width;
        const scale = 1;
        return { x, scale, display: "block" };
      });
      return prev + 1;
    });
  }
  function handleDecrease() {
    setImgIndex((prev) => {
      if (prev - 1 < 0) return prev;
      api.start((i) => {
        if (i < prev - 1 - 1 || i > prev - 1 + 1) return { display: "none" };
        const x = (i - (prev - 1)) * width;
        const scale = 1;
        return { x, scale, display: "block" };
      });
      return prev - 1;
    });
  }

  const handleSetIsZooming = (b: boolean) => {
    setIsZooming(b);
  };

  /**
   * handle zoom
   * handle dezoom
   * handle reset zoom
   */
  /** handleZoom
   * imgindex
   * zoom scale value
   */
  const [manualZoomScale, setManualZoomScale] = useState<number>(1);
  function handleZoomIn() {
    setManualZoomScale((prev) => {
      if (prev + 0.25 > 2) return 2;
      else return prev + 0.25;
    });
  }
  function handleZoomOut() {
    setManualZoomScale((prev) => {
      if (prev - 0.25 < 0.5) return 1;
      else return prev - 0.25;
    });
  }
  function handleZoomReset() {
    setManualZoomScale(1);
  }

  return {
    imgIndex,
    galleryImages,
    props,
    ref,
    bind,
    isZooming,
    manualZoomScale,
    handleSetImages,
    handleCloseGallery,
    handleIncrease,
    handleDecrease,
    handleSetIsZooming,
    handleZoomIn,
    handleZoomOut,
    handleZoomReset,
  };
}
