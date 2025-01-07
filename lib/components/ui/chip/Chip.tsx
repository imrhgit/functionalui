"use client";

import { useSpring } from "@react-spring/web";
import { Container, Layout, Text_Span, useUiContext } from "functionalui";
import { Themes } from "../../../contexts/ui/types";
import {
  COLOR_VALUES,
  ColorPalettes,
  ColorRanges,
  ColorSets,
  Displays,
  FontSizes,
  FontWeights,
  Radiuses,
  Sizings,
  Spacings,
} from "functionalui/types";
import { CSSProperties, FC, ReactNode } from "react";

interface P {
  children: ReactNode;
  paddings: "top bottom" | "left right" | "all";
  margin?: Spacings | undefined;
  marginTop?: Spacings | undefined;
  marginBottom?: Spacings | undefined;
  marginLeft?: Spacings | undefined;
  marginRight?: Spacings | undefined;
  bgColor?: ColorPalettes;
  style?: CSSProperties;
  fontSize?: FontSizes;
  chipColor?: ColorSets;
  // sizings -- text & padding
}

const Chip: FC<P> = ({
  children,
  chipColor = ColorSets.Primarys,
  paddings,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontSize,
  style,
}) => {
  const { theme } = useUiContext();
  const styles = useSpring({
    backgroundColor:
      theme !== Themes.Light
        ? COLOR_VALUES[ColorRanges[chipColor][0] + 2]
        : COLOR_VALUES[ColorRanges[chipColor][1] - 2],
  });
  return (
    <Layout display={Displays.Flex}>
      <Container
        borderRadius={Radiuses.Size5}
        {...chipPaddings(paddings)}
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        style={{ ...style, ...styles }}
      >
        <Text_Span
          style={{ marginTop: -1 }}
          fontSize={fontSize}
          fontWeight={FontWeights.Size3}
        >
          {children}
        </Text_Span>
      </Container>
    </Layout>
  );
};

export default Chip;

const chipPaddings = (paddings: "top bottom" | "left right" | "all"): any => {
  switch (paddings) {
    case "all":
      return {
        padding: Sizings.Size1,
      };
    case "left right":
      return {
        paddingLeft: Sizings.Size1,
        paddingRight: Sizings.Size1,
      };
    default:
      return {
        paddingTop: Sizings.Size1,
        paddingBottom: Sizings.Size1,
      };
  }
};
