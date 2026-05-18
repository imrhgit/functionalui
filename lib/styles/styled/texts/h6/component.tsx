"use client";

import { animated } from "@react-spring/web";
import {
	COLOR_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	HeadElementProps,
	TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { FC } from "react";

const Text_H6: FC<HeadElementProps> = ({
  paletteColor,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  className,
  children,
  ...props
}) => {
  const classes: any = {};
  if (paletteColor) {
    classes[COLOR_CLASSES[paletteColor]] = true;
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
    <animated.h6
      className={`${Object.keys(classes).join(" ")} ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </animated.h6>
  );
};

export default Text_H6;
