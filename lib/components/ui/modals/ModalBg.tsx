import { useTransition } from "@react-spring/web";
import { Container } from "functionalui";
import {
  COLOR_RGBA_ALPHA,
  COLOR_VALUES,
  ColorPalettes,
  ColorRGBAAlphas,
} from "functionalui/types";
import { FC } from "react";
import cstyles from "./styles.module.css";

interface P {
  isShown: boolean;
  modalBackground?: ColorPalettes;
}
const ModalBg: FC<P> = ({ isShown, modalBackground }) => {
  const transition = useTransition(isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transition(
    (styles, item) =>
      item && (
        <Container
          className={cstyles.modalBgAnimated}
          style={{
            ...styles,
            backgroundColor: modalBackground
              ? `${COLOR_VALUES[modalBackground]}${COLOR_RGBA_ALPHA[ColorRGBAAlphas.Dark3]}`
              : "#0000007f",
          }}
        />
      ),
  );
};

export default ModalBg;
