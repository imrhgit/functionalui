"use client";

import { useSpring } from "@react-spring/web";
import { Container, Layout, Text_Span, useUiContext } from "functionalui";
import {
  COLOR_VALUES,
  ColorPalettes,
  ColorRanges,
  ColorSets,
  Displays,
  FontSizes,
  FontWeights,
  Spacings,
} from "functionalui/types";
import { FC, ReactNode } from "react";
import { Themes } from "../../../contexts/ui/types";
import {
  CHIP_SIZE,
  CHIP_STYLE,
  ChipSizes,
  ChipStyles,
} from "../../../styles/types/ui/chip/types";

interface P {
  children: ReactNode;
  paddings?: "top bottom" | "left right" | "all";
  margin?: Spacings | undefined;
  marginTop?: Spacings | undefined;
  marginBottom?: Spacings | undefined;
  marginLeft?: Spacings | undefined;
  marginRight?: Spacings | undefined;
  bgColor?: ColorPalettes;
  chipStyle?: ChipStyles;
  fontSize?: FontSizes;
  chipColor?: ColorSets;
  size?: ChipSizes;
}

const Chip: FC<P> = ({
  children,
  chipColor = ColorSets.Primarys,
  paddings = "all",
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontSize,
  // style,
  chipStyle = ChipStyles.Filled,
  size = ChipSizes.Medium,
}) => {
  const { theme } = useUiContext();
  const styles = useSpring({
    backgroundColor:
      theme !== Themes.Light
        ? CHIP_STYLE[chipStyle]?.bgColor
          ? COLOR_VALUES[ColorRanges[chipColor][0] + 2]
          : undefined
        : CHIP_STYLE[chipStyle]?.bgColor
          ? COLOR_VALUES[ColorRanges[chipColor][1] - 2]
          : undefined,
    color:
      theme !== Themes.Light
        ? // dark
          CHIP_STYLE[chipStyle]?.font?.fontColor
          ? CHIP_STYLE[chipStyle]?.font?.fontColor
          : COLOR_VALUES[ColorRanges[chipColor][0] + 4]
        : // light
          CHIP_STYLE[chipStyle]?.font?.fontColor
          ? CHIP_STYLE[chipStyle]?.font?.fontColor
          : COLOR_VALUES[ColorRanges[chipColor][0] + 4],
  });
  return (
    <Layout display={Displays.Flex}>
      <Container
        {...chipPaddings(paddings, size)}
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        // border
        borderRadius={CHIP_SIZE[size].borderRadius}
        borderColor={CHIP_STYLE[chipStyle].border?.borderColor}
        borderStyle={CHIP_STYLE[chipStyle].border?.borderStyle}
        borderWidth={CHIP_STYLE[chipStyle].border?.borderWidth}
        style={{
          // ...style,
          ...styles,
        }}
      >
        <Text_Span
          style={{
            display: "inline-block",
            transform: "translateY(-1px)",
            color: "inherit",
          }}
          fontSize={fontSize ? fontSize : CHIP_SIZE[size].fontSize}
          fontWeight={FontWeights.Size3}
        >
          {children}
        </Text_Span>
      </Container>
    </Layout>
  );
};

export default Chip;

const chipPaddings = (
  paddings: "top bottom" | "left right" | "all",
  size: ChipSizes,
): any => {
  switch (paddings) {
    case "all":
      return {
        paddingTop: CHIP_SIZE[size].paddingTop,
        paddingBottom: CHIP_SIZE[size].paddingBottom,
        paddingLeft: CHIP_SIZE[size].paddingLeft,
        paddingRight: CHIP_SIZE[size].paddingRight,
      };
    case "left right":
      return {
        paddingLeft: CHIP_SIZE[size].paddingLeft,
        paddingRight: CHIP_SIZE[size].paddingRight,
      };
    default:
      return {
        paddingTop: CHIP_SIZE[size].paddingTop,
        paddingBottom: CHIP_SIZE[size].paddingBottom,
      };
  }
};
