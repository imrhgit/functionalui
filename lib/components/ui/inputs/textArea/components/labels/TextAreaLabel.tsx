import { Container } from "functionalui/container";
import { Text_Span } from "functionalui/texts/span";
import {
  ColorPalettes,
  ColorSets,
  FontWeights,
  // TEXT_AREA_COLOR,
  // TEXT_AREA_SIZE,
  // TextAreaSizes,
} from "functionalui/types";
import { FC } from "react";
import {
  TEXT_AREA_COLOR,
  TEXT_AREA_SIZE,
  TextAreaSizes,
} from "../../../../../../styles/types/ui/inputs/textarea/types";
interface P {
  id: string;
  label: string;
  size: TextAreaSizes;
  textAreaColor: ColorSets;
  labelTextColor?: boolean | ColorPalettes;
}
const TextAreaLabel: FC<P> = ({
  id,
  label,
  size,
  textAreaColor,
  labelTextColor,
}) => {
  return (
    <Container
      paddingLeft={TEXT_AREA_SIZE[size].paddings.left}
      paddingBottom={TEXT_AREA_SIZE[size].paddings.bottom}
    >
      <label htmlFor={id}>
        <Text_Span
          fontWeight={FontWeights.Size3}
          paletteColor={
            labelTextColor && typeof labelTextColor === "boolean"
              ? TEXT_AREA_COLOR[textAreaColor].labelColor
              : ColorPalettes.Grey10
          }
          fontSize={TEXT_AREA_SIZE[size].font.size}
        >
          {label}
        </Text_Span>
      </label>
    </Container>
  );
};

export default TextAreaLabel;
