"use client";

import { animated } from "@react-spring/web";
import {
  ELEMENT_RESIZE_CLASSES,
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  TEXT_ALIGN_CLASSES,
  TextAreaProps,
} from "functionalui/types";
import { forwardRef } from "react";
import { OUTLINE_STYLE_CLASSES } from "../../../types/classes";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";

const F__TextAreaRef = forwardRef(
  (
    {
      paletteColor,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      textAlign,
      resize,
      textOutlineStyle,
      className,
      children,
      ...props
    }: TextAreaProps,
    ref: any
  ) => {
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
    if (resize) {
      classes[ELEMENT_RESIZE_CLASSES[resize]] = true;
    }
    if (textOutlineStyle) {
      classes[OUTLINE_STYLE_CLASSES[textOutlineStyle]] = true;
    }
    return (
      <animated.textarea
        ref={ref}
        className={`${Object.keys(classes).join(" ")} ${
          className ? className : ""
        }`}
        {...props}
      >
        {children}
      </animated.textarea>
    );
  }
);

export default F__TextAreaRef;
