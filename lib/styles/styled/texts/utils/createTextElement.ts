import { animated, AnimatedProps } from "@react-spring/web";
import {
  CURSOR_CLASSES,
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { createElement, JSX, Ref } from "react";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";
import { TextStyleProps } from "../../../types/components.types";

type AllowedTags = "span" | "p";
type PropsOf<T extends AllowedTags> = AnimatedProps<JSX.IntrinsicElements[T]>;

type TagExtraPropsMap = {
  span: TextStyleProps;
  p: TextStyleProps;
};

// @todo("anti-pattern for className type any")
type CompProps<
  Default extends AllowedTags,
  As extends AllowedTags = Default
> = PropsOf<As> &
  TagExtraPropsMap[As] & {
    as?: As;
    children?: React.ReactNode;
    className?: any;
  };

export function createTextElement<T extends AllowedTags>(tag?: T) {
  function Component(props: CompProps<T>, ref?: Ref<any>) {
    const {
      paletteColor,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      textAlign,
      cursor,
      className,
      children,
      ...rest
    } = props;
    const extraHandled = { ...rest };
    const collectedClasses: Array<string> = [];
    if (paletteColor) {
      collectedClasses.push(FONT_COLOR_CLASSES[paletteColor]);
    }
    if (fontSize) {
      collectedClasses.push(FONT_SIZE_CLASSES[fontSize]);
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

    return createElement(
      (animated as any)[`${tag}`],
      {
        ref,
        className: [...collectedClasses, className].filter(Boolean).join(" "),
        ...extraHandled,
      },
      children
    );
  }

  Component.displayName = `createElement(${String(tag)})`;

  return Component as <As extends AllowedTags = T>(
    props: CompProps<T, As> & { ref?: React.Ref<any> }
  ) => JSX.Element;
}
