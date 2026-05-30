import { Container } from "functionalui/container";
import { LabelText } from "functionalui/label-text";
import { UIcon } from "functionalui/icons";
import { ColorPalettes, Sizings } from "functionalui/types";
import { FC, useState } from "react";

interface P {
  inputHelper: string;
}
const InputTextHelper: FC<P> = ({ inputHelper }) => {
  const [helperHover, setHelperHover] = useState(false);
  return (
    <Container
      style={{
        position: "absolute",
        top: "50%",
        right: -10,
        transform: "translateY(-25%)",
      }}
      onMouseEnter={() => setHelperHover(true)}
      onMouseLeave={() => setHelperHover(false)}
    >
      <UIcon
        name="info"
        size={Sizings.Size2}
        colorLight={ColorPalettes.Primary5}
        colorDark={ColorPalettes.Primary5}
      />
      <Container style={{ position: "relative", pointerEvents: "none" }}>
        <LabelText labelName={inputHelper} hover={helperHover} x={0} y={0} />
      </Container>
    </Container>
  );
};

export default InputTextHelper;
