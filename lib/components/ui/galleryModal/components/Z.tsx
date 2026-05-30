import { useSpring } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import { ContainerRef } from "functionalui/container";
import { Layout } from "functionalui/layout";
import {
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
} from "functionalui/types";
import { FC, ReactNode, useEffect, useRef } from "react";
import { useGalleryContext } from "../contexts/GalleryContext";
import cstyles from "./Z.module.css";

const useGesture = createUseGesture([dragAction, pinchAction]);

interface P {
  children: ReactNode;
}
const Zzz: FC<P> = ({ children }) => {
  const { imgIndex, isZooming, handleSetIsZooming, manualZoomScale } =
    useGalleryContext();
  useEffect(() => {
    const handler = (e: any) => e.preventDefault();
    if (document) {
      document.addEventListener("gesturestart", handler);
      document.addEventListener("gesturechange", handler);
      document.addEventListener("gestureend", handler);
    }
    return () => {
      if (document) {
        document.removeEventListener("gesturestart", handler);
        document.removeEventListener("gesturechange", handler);
        document.removeEventListener("gestureend", handler);
      }
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgIndex === 0) return;
    api.start((prev: any) => ({
      ...prev,
      x: 0,
      y: 0,
      scale: 1,
    }));
  }, [api, imgIndex]);

  useEffect(() => {
    api.start((prev: any) => ({
      ...prev,
      scale: manualZoomScale,
    }));
  }, [api, manualZoomScale]);

  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y] }) => {
        if (!isZooming) {
          return;
        }
        if (pinching) return cancel();
        api.start({ x, y });
      },
      // onWheel: ({ axis, movement: [_, ms], ...props }) => {
      // },
      onPinch: ({
        origin: [ox, oy],
        first,
        last,
        movement: [ms],
        offset: [s],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y }: any =
            ref.current && ref.current.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }
        if (last && s === 1 && ox !== 0) {
          if (handleSetIsZooming) {
            handleSetIsZooming(false);
          }
          api.start({ scale: 1, x: 0, y: 0 });
          return memo;
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        // api.start({ scale: s, rotateZ: a, x, y })
        if (handleSetIsZooming) {
          handleSetIsZooming(true);
        }
        api.start({ scale: s, x, y });

        return memo;
      },
    },
    {
      target: ref,
      drag: {
        from: () => [style.x.get(), style.y.get()],
        bounds: { left: -100, right: 100, top: -100, bottom: 100 },
      },
      // pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
      pinch: { scaleBounds: { min: 1, max: 2 }, rubberband: true },
      wheel: { axis: "y" },
    }
  );

  return (
    <Layout
      display={Displays.Flex}
      flexJustifyContent={FlexJustifyContents.Center}
      flexAlignItem={FlexAlignItems.Center}
      style={{ height: "100%" }}
    >
      <ContainerRef
        ref={ref}
        className={cstyles.ZAnimated}
        style={{ ...style, backgroundColor: "transparent" }}
      >
        {children}
      </ContainerRef>
    </Layout>
  );
};

export default Zzz;

/**
 * pinch zoom HOC
 */
