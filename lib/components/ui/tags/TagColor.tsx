import Color from "color";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_Span } from "functionalui/texts/span";
import { COLOR_VALUES, ColorPalettes } from "functionalui/types";
import { FC } from "react";
import { TAG_SIZE, TagColorSizes } from "../../../styles/types/ui/tag/types";

interface P {
  size: TagColorSizes;
  color?: ColorPalettes | string;
  text?: string | number;
}
const TagColor: FC<P> = ({ size, color = ColorPalettes.Primary5, text }) => {
  // determine text color -- for now use default
  let textColor: string = COLOR_VALUES[ColorPalettes.Grey10];
  if (text && text !== "" && typeof color === "string") {
    const propColor = Color(color);
    const luminosityValue = propColor.luminosity();
    if (luminosityValue > 0.5) {
      // passed color is brigter
      textColor = propColor.darken(0.8).hex();
    } else {
      // passed color is darker
      textColor = propColor.lighten(0.35).hex();
    }
  }
  return (
    <Layout>
      {text && (
        <Container
          marginTop={TAG_SIZE[size].margins.marginTop}
          marginBottom={TAG_SIZE[size].margins.marginBottom}
          marginLeft={TAG_SIZE[size].margins.marginLeft}
          marginRight={TAG_SIZE[size].margins.marginRight}
          style={{
            width: TAG_SIZE[size].width,
            height: TAG_SIZE[size].height,
            borderRadius: "50%",
            backgroundColor:
              typeof color === "number" ? COLOR_VALUES[color] : color,
            color: textColor,
          }}
        >
          <Text_Span>{text}</Text_Span>
        </Container>
      )}
    </Layout>
  );
};

export default TagColor;
