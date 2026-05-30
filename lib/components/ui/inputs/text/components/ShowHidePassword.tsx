import { Container } from "functionalui/container";
import { UIcon } from "functionalui/icons";
import { ColorPalettes, Cursors, Icons, Sizings } from "functionalui/types";
import { FC } from "react";
import cstyles from "../styles.module.css";

interface P {
  isShow: boolean;
  handleShowHideText: (v?: any) => void;
}
const ShowHidePassword: FC<P> = ({ isShow, handleShowHideText }) => {
  return (
    <Container
      className={cstyles.showHidePassword}
      style={{
        position: "absolute",
        bottom: ".75rem",
        left: "88%",
        zIndex: 4,
        cursor: "pointer",
      }}
      onClick={() => handleShowHideText()}
    >
      <UIcon
        name={!isShow ? Icons.Eye : Icons.EyeOff}
        size={Sizings.Size3}
        colorLight={ColorPalettes.Primary5}
        colorDark={ColorPalettes.Primary5}
        cursor={Cursors.Pointer}
      />
    </Container>
  );
};
export default ShowHidePassword;
