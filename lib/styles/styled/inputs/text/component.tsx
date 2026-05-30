import { animated } from "@react-spring/web";
import {
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  TEXT_ALIGN_CLASSES,
  TextInputProps,
} from "functionalui/types";
import { FC } from "react";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";

const F__TextInput: FC<TextInputProps> = ({
  paletteColor,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  className,
  children,
  ref,
  ...props
}) => {
  const classes: any = {};
  if (paletteColor) {
    classes[FONT_COLOR_CLASSES[paletteColor]] = true;
  }
  if (fontSize) {
    classes[FONT_SIZE_CLASSES[fontSize]] = true;
  }
  if (fontFamily) {
    classes[FONT_FAMILY_CLASSES[fontFamily]] = true;
  }
  if (fontWeight) {
    classes[FONT_WEIGHT_CLASSES[fontWeight]] = true;
  }
  if (fontStyle) {
    classes[FONT_STYLE_CLASSES[fontStyle]] = true;
  }
  if (textAlign) {
    classes[TEXT_ALIGN_CLASSES[textAlign]] = true;
  }
  return (
    <animated.input
      ref={ref}
      className={`${Object.keys(classes).join(" ")} ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </animated.input>
  );
};

export default F__TextInput;
