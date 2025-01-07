import { Layout } from "functionalui";
import {
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  ModalStyles,
} from "functionalui/types";
import { FC, ReactNode } from "react";
import useKeyPress from "../../../hooks/useKeyPress";
import SpringEnterOffsetBy from "../../springAnimations/springTransitions/SpringEnterOffsetBy";
import ModalPortal from "../portals/ModalPortal";
import ModalBg from "./ModalBg";
import ModalGesturedCard from "./ModalGestureCard";
import ModalWrapper from "./ModalWrapper";

interface P {
  showModal: boolean;
  closeModal: (v?: any) => void;
  children: ReactNode;
  modalStyles?: ModalStyles;
  modalBackground?: ColorPalettes;
}
const Modal: FC<P> = ({
  showModal,
  closeModal,
  modalStyles = ModalStyles.Default,
  modalBackground,
  children,
}) => {
  useKeyPress("Escape", () => {
    closeModal();
  });
  return (
    <ModalLayout
      closeModal={closeModal}
      showModal={showModal}
      modalStyles={modalStyles}
      modalBackground={modalBackground}
    >
      {children}
    </ModalLayout>
  );
};

export default Modal;

const ModalLayout: FC<P> = ({
  showModal,
  closeModal,
  children,
  modalStyles = ModalStyles.Default,
  modalBackground,
}) => {
  return (
    <ModalPortal>
      <ModalWrapper isShown={showModal}>
        <ModalBg isShown={showModal} modalBackground={modalBackground} />
        <SpringEnterOffsetBy
          direction="vertical"
          isShown={showModal}
          enterOffsetBy={3}
        >
          <Layout
            display={Displays.Flex}
            flexJustifyContent={FlexJustifyContents.Center}
            flexAlignItem={FlexAlignItems.FlexStart}
            style={{
              position: "absolute",
              minHeight: "100vh",
              minWidth: "100%",
              top: 0,
            }}
          >
            <ModalGesturedCard
              closeModal={closeModal}
              modalStyles={modalStyles}
            >
              {children}
            </ModalGesturedCard>
          </Layout>
        </SpringEnterOffsetBy>
      </ModalWrapper>
    </ModalPortal>
  );
};
