import { useSpring } from "@react-spring/web";
import { Container, Text_Span } from "functionalui";
import {
  COLOR_VALUES,
  ColorRanges,
  ColorSets,
  Spacings,
} from "functionalui/types";
import { FC } from "react";

interface P {
  text: any;
  value: any;
  idx: any;
  id: any;
  handleSelectInset: any;
  isSelected: any;
  // rgbBg: any;
  insetColor?: ColorSets;
}
const InsetItem: FC<P> = ({
  text,
  // value,
  idx,
  // id,
  handleSelectInset,
  isSelected,
  // rgbBg,
  insetColor = ColorSets.Primarys,
}) => {
  const animStyles = useSpring({
    // backgroundColor: isSelected ? rgbBg ? rgbBg : "rgb(255,255,255)" : "rgb(222,226,230)",
    backgroundColor: isSelected
      ? COLOR_VALUES[ColorRanges[insetColor][0] + 3]
      : COLOR_VALUES[ColorRanges[ColorSets.Greys][0] + 2],
    // color: isSelected ? "rgb(25,25,25)" : "rgb(134,142,150)",
    color: isSelected
      ? COLOR_VALUES[ColorRanges[ColorSets.Greys][1] - 1]
      : COLOR_VALUES[ColorRanges[ColorSets.Greys][1] - 4],
    boxShadow: isSelected
      ? "inset 0 0px 0 hsla(0, 0%, 0%, 0), inset 0 0px 0px hsla(0, 0%, 0%, 0)"
      : "inset 0 -2px 0 hsla(0, 0%, 100%, .055), inset 0 2px 2px hsla(0, 0%, 0%, 0.1)",
    // boxShadow: isSelected ? "inset 0 0px 0 hsla(0, 0%, 0%, 0)" : "inset 0 -2px 0 hsla(0, 0%, 100%, .15)",
    // config: {
    //   ...config.molasses,
    // }
  });
  // console.log("backgroundColor",)
  const textStyles = useSpring({
    // scale: isSelected ? 1 : 0.9,
    fontWeight: isSelected ? 500 : 300,
  });
  return (
    <Container
      style={{ ...animStyles, cursor: "pointer" }}
      paddingTop={Spacings.Size1}
      paddingBottom={Spacings.Size1}
      paddingLeft={Spacings.Size2}
      paddingRight={Spacings.Size2}
      onClick={() => handleSelectInset(idx)}
    >
      <Container style={textStyles}>
        <Text_Span style={{ color: "inherit" }}>{text}</Text_Span>
      </Container>
    </Container>
  );
};

export default InsetItem;
