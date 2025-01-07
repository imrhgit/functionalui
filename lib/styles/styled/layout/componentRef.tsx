"use client";

import { animated } from "@react-spring/web";
import {
  ALIGN_SELF_CLASSES,
  DISPLAY_CLASSES,
  FLEX_ALIGN_CONTENT_CLASSES,
  FLEX_ALIGN_ITEMS_CLASSES,
  FLEX_DIRECTION_CLASSES,
  FLEX_JUSTIFY_CONTENT_CLASSES,
  FLEX_WRAP_CLASSES,
  GRID_ALIGN_CONTENT_CLASSES,
  GRID_COLUMN_GAP_CLASSES,
  GRID_GAP_CLASSES,
  GRID_JUSTIFY_CONTENT_CLASSES,
  GRID_ROW_GAP_CLASSES,
  JUSTIFY_SELF_CLASSES,
  LayoutDivProps,
} from "functionalui/types";
import { forwardRef } from "react";

const LayoutRef = forwardRef(
  (
    {
      display,
      flexDirection,
      flexWrap,
      flexJustifyContent,
      flexAlignItem,
      flexAlignContent,
      gridGap,
      gridRowGap,
      gridColumnGap,
      gridJustifyContent,
      gridAlignContent,
      justifySelf,
      alignSelf,
      className,
      children,
      ...props
    }: LayoutDivProps,
    ref: any,
  ) => {
    const classes: any = {};
    if (display) {
      classes[DISPLAY_CLASSES[display]] = true;
    }
    if (flexDirection) {
      classes[FLEX_DIRECTION_CLASSES[flexDirection]] = true;
    }
    if (flexWrap) {
      classes[FLEX_WRAP_CLASSES[flexWrap]] = true;
    }
    if (flexJustifyContent) {
      classes[FLEX_JUSTIFY_CONTENT_CLASSES[flexJustifyContent]] = true;
    }
    if (flexAlignItem) {
      classes[FLEX_ALIGN_ITEMS_CLASSES[flexAlignItem]] = true;
    }
    if (flexAlignContent) {
      classes[FLEX_ALIGN_CONTENT_CLASSES[flexAlignContent]] = true;
    }
    if (gridGap) {
      classes[GRID_GAP_CLASSES[gridGap]] = true;
    }
    if (gridRowGap) {
      classes[GRID_ROW_GAP_CLASSES[gridRowGap]] = true;
    }
    if (gridColumnGap) {
      classes[GRID_COLUMN_GAP_CLASSES[gridColumnGap]] = true;
    }
    if (gridJustifyContent) {
      classes[GRID_JUSTIFY_CONTENT_CLASSES[gridJustifyContent]] = true;
    }
    if (gridAlignContent) {
      classes[GRID_ALIGN_CONTENT_CLASSES[gridAlignContent]] = true;
    }
    if (justifySelf) {
      classes[JUSTIFY_SELF_CLASSES[justifySelf]] = true;
    }
    if (alignSelf) {
      classes[ALIGN_SELF_CLASSES[alignSelf]] = true;
    }
    return (
      <animated.div
        ref={ref}
        className={`${Object.keys(classes).join(" ")} ${className ? className : ""}`}
        {...props}
      >
        {children}
      </animated.div>
    );
  },
);

export default LayoutRef;
