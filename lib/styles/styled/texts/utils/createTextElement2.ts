import { animated, AnimatedProps } from "@react-spring/web";
import {
  BASE_FONT_SIZE,
  CURSOR_CLASSES,
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  FontSizes,
  TEXT_ALIGN_CLASSES
} from "functionalui/types";
import { createElement, JSX, ReactNode, Ref } from "react";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";
import { TextStyleProps } from "../../../types/components.types";
import returnSizeStr from "../utils/returnSizeStr";

/* type Intrinsic = keyof JSX.IntrinsicElements; */
type AllowedTags = "span" | "p";
type PropsOf<T extends AllowedTags> = AnimatedProps<JSX.IntrinsicElements[T]>;

type TagExtraPropsMap = {
  span: TextStyleProps;
  p: TextStyleProps;
};
type CompProps<T extends AllowedTags> = PropsOf<T> &
  TagExtraPropsMap[T] & { children?: ReactNode; ref?: Ref<any>; className: string };

export function createTextElement<T extends AllowedTags>(
  tag?: T,
  baseFontSize?: FontSizes
) {
  function Component(
    props: CompProps<T>,
    ref?: Ref<any>
  ) {
    const {
      paletteColor,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      textAlign,
      cursor,
      children,
      ...rest
    } = props;
    const extraHandled = { ...rest };
    const collectedClasses: Array<string> = [];
    if (paletteColor) {
      collectedClasses.push(FONT_COLOR_CLASSES[paletteColor]);
    }
    if (fontSize) {
      if (baseFontSize && baseFontSize !== BASE_FONT_SIZE) {
        collectedClasses.push(
          FONT_SIZE_CLASSES[
            returnSizeStr(fontSize, baseFontSize - BASE_FONT_SIZE)
          ]
        );
      } else collectedClasses.push(FONT_SIZE_CLASSES[fontSize]);
    } else {
      collectedClasses.push(
        FONT_SIZE_CLASSES[baseFontSize || fontSize || FontSizes.Size2]
      );
    }
    if (fontFamily) {
      collectedClasses.push(FONT_FAMILY_CLASSES[fontFamily]);
    }
    if (fontWeight) {
      collectedClasses.push(FONT_WEIGHT_CLASSES[fontWeight]);
    }
    if (fontStyle) {
      collectedClasses.push(FONT_STYLE_CLASSES[fontStyle]);
    }
    if (textAlign) {
      collectedClasses.push(TEXT_ALIGN_CLASSES[textAlign]);
    }
    if (cursor) {
      collectedClasses.push(CURSOR_CLASSES[cursor]);
    }
    extraHandled.className = [...collectedClasses, extraHandled.className]
      .filter(Boolean)
      .join(" ");

    return createElement(
      (animated as any)[`${tag}`],
      { ref, ...extraHandled },
      children
    );
  }

  Component.displayName = `createElement(${String(tag)})`;

  /* return Component as React.ComponentType<AnimatedProps<JSX.IntrinsicElements[T]>>() => JSX.Element; */
}
