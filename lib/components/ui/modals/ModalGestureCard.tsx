import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { ContainerRef } from "functionalui";
import { ModalStyles } from "functionalui/types";
import { FC, ReactNode } from "react";
import useClickOutsideDOM from "../../../hooks/useClickOutsideDOM";
import cstyles from "./styles.module.css";

interface P {
  closeModal: (v?: any) => void;
  children: ReactNode;
  modalStyles: ModalStyles;
}
const ModalGesturedCard: FC<P> = ({ closeModal, modalStyles, children }) => {
  const nodeDOM = useClickOutsideDOM(() => closeModal());
  const [styles, api] = useSpring(() => ({ y: 0 }));
  const bind = useDrag(
    ({ velocity: [, vy], last, down, movement: [, my], cancel, type }) => {
      if (
        typeof type === "string" &&
        (type.includes("pointer") || type.includes("mouse"))
      ) {
        return;
      }
      if (last && vy < 0.3) {
        cancel();
      } else if (last && vy > 0.3) {
        closeModal();
      }
      if (my < -0.001) {
        cancel();
      } else if (my > 450) {
        closeModal();
      }
      api.start({ y: down ? my : 0, immediate: down });
    },
    { axis: "y", filterTaps: true, pointer: { touch: true } },
  );
  return (
    <ContainerRef
      className={
        modalStyles === ModalStyles.Nocard
          ? `${cstyles.modalCardCopyOriAnimated} ${cstyles["no-card"]}`
          : `${cstyles.modalCardCopyOriAnimated}`
      }
      {...bind()}
      style={{ ...styles, touchAction: "none" }}
      ref={nodeDOM}
    >
      {children}
    </ContainerRef>
  );
};

export default ModalGesturedCard;
