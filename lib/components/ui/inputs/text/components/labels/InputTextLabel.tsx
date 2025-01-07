import { Container, Text_Span } from "functionalui";
import {
  ColorPalettes,
  ColorSets,
  FontWeights,
  InputTextSizes,
} from "functionalui/types";
import { FC } from "react";
import {
  INPUT_TEXT_SIZE,
  INPUT_TEXT_COLOR,
} from "../../../../../../styles/types/ui/inputs/text/types";

interface P {
  id: string;
  label: string;
  // isEmpty?: boolean;
  // ofFocus: boolean;
  size: InputTextSizes;
  inputColor: ColorSets;
  labelTextColor?: boolean | ColorPalettes;
}
const InputTextLabel: FC<P> = ({
  id,
  label,
  size,
  labelTextColor,
  inputColor,
}) => {
  return (
    <Container paddingLeft={INPUT_TEXT_SIZE[size].paddings.left}>
      <label htmlFor={id}>
        <Text_Span
          fontWeight={FontWeights.Size3}
          paletteColor={
            labelTextColor && typeof labelTextColor === "boolean"
              ? INPUT_TEXT_COLOR[inputColor].labelColor
              : ColorPalettes.Grey10
          }
          // fontColor={INPUT_TEXT_COLOR[inputColor].labelColor}
          fontSize={INPUT_TEXT_SIZE[size].font.size}
        >
          {label}
        </Text_Span>
      </label>
    </Container>
  );
};

export default InputTextLabel;
