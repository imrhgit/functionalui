import { Container, Layout } from "functionalui";
import {
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  ModalStyles,
} from "functionalui/types";
import { FC, ReactNode, useEffect } from "react";
import Modal from "../modals/Modal";
import GalleryClose from "./components/GalleryClose";
import GalleryIslandMenu from "./components/GalleryIslandMenu";
import Z from "./components/Z";
import {
  ProvideGalleryContext,
  useGalleryContext,
} from "./contexts/GalleryContext";
import cstyles from "./galleryModal.module.css";

interface P {
  showModal: boolean;
  closeModal: (v?: any) => void;
  activeIdx?: number;
  setActiveIdx: (v: number) => void;
  images: Array<any>;
}
const GalleryModal: FC<P> = ({
  showModal,
  closeModal,
  activeIdx = 0,
  setActiveIdx,
  images = [],
}) => {
  return (
    <ContextWrapper>
      <GalleryModalC
        showModal={showModal}
        closeModal={closeModal}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
        images={images}
      />
    </ContextWrapper>
  );
};

export default GalleryModal;

const GalleryModalC: FC<P> = ({
  showModal,
  closeModal,
  // activeIdx = 0,
  // setActiveIdx,
  images = [],
}) => {
  const { bind, props, ref, handleCloseGallery, handleSetImages } =
    useGalleryContext();

  useEffect(() => {
    handleSetImages(images);
  }, [handleSetImages, images]);

  const handleCloseModal = () => {
    handleCloseGallery(closeModal);
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={handleCloseModal}
      modalStyles={ModalStyles.Nocard}
      modalBackground={ColorPalettes.Grey1}
    >
      <Layout
        display={Displays.Flex}
        flexAlignItem={FlexAlignItems.Center}
        flexJustifyContent={FlexJustifyContents.Center}
        style={{ height: "100%", maxWidth: "100%" }}
      >
        <div
          ref={ref}
          style={{
            overflow: "hidden",
            width: "100%",
            height: "100vh",
            position: "relative",
          }}
        >
          {props.map(
            (
              { x, display, scale }: { x: number; display: any; scale: any },
              idx: number,
            ) => (
              <Container
                {...bind()}
                key={idx}
                style={{
                  display,
                  x,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  willChange: "transform",
                }}
              >
                <Container
                  style={{
                    scale,
                    touchAction: "none",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    width: "100%",
                    height: "100%",
                    willChange: "transform",
                  }}
                >
                  <Z>
                    <Container className={`${cstyles.imageContainer} desktop`}>
                      {/* <Image alt="" src={images[idx]} fill style={{ objectFit: "contain" }} /> */}
                      {images[idx]}
                    </Container>
                    <Container
                      className={`${cstyles.imageContainer} big-tablet`}
                    >
                      {/* <Image alt="" src={images[idx]} fill style={{ objectFit: "contain" }} /> */}
                      {images[idx]}
                    </Container>
                  </Z>
                </Container>
              </Container>
            ),
          )}
        </div>
        <Container
          className={cstyles.galleryMenuContainer}
          style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        >
          <GalleryIslandMenu openMenu={true} />
        </Container>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <GalleryClose handleCloseGallery={handleCloseModal} />
        </div>
      </Layout>
    </Modal>
  );
};

interface P2 {
  children: ReactNode;
}
const ContextWrapper: FC<P2> = ({ children }) => {
  return <ProvideGalleryContext>{children}</ProvideGalleryContext>;
};
