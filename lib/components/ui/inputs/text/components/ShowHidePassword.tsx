import { Container, UIcon } from "functionalui";
import { ColorPalettes, Sizings } from "functionalui/types";
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
      // style={{
      //   position: "absolute",
      //   bottom: ".75rem",
      //   left: "88%",
      //   zIndex: 4,
      //   cursor: "pointer",
      // }}
      onClick={() => handleShowHideText()}
    >
      <UIcon
        name={!isShow ? "eye_show" : "eye_hide"}
        size={Sizings.Size3}
        colorLight={ColorPalettes.Primary5}
        colorDark={ColorPalettes.Primary5}
      />
    </Container>
  );
};
export default ShowHidePassword;
