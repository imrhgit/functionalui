import { Container, Layout } from "functionalui";
import { Displays, FlexDirections } from "functionalui/types";
import { FC } from "react";
import { HexColorPicker } from "react-colorful";
import useClickOutsideDOM from "../../../hooks/useClickOutsideDOM";
import cstyles from "./styles.module.css";

interface P {
  selectColor: string;
  handleColorChange: (a: any) => void;
  closePicker: ((p?: any) => void) | undefined;
  position: "absolute" | "static";
}
const Picker: FC<P> = ({
  position,
  selectColor,
  closePicker,
  handleColorChange,
}) => {
  const nodeDOM = useClickOutsideDOM(() => {
    if (closePicker) {
      closePicker(false);
    }
  });

  return (
    <div ref={nodeDOM} style={{ position: position }}>
      <Layout display={Displays.Flex} flexDirection={FlexDirections.Column}>
        <Container>
          <Container className={cstyles.colorfulcontainer}>
            <HexColorPicker color={selectColor} onChange={handleColorChange} />
          </Container>
        </Container>
      </Layout>
    </div>
  );
};

export default Picker;
