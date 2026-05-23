import { animated } from "@react-spring/web";
import {
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  HeadElementProps,
  TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { JSX, Ref, createElement } from "react";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";

/** helper types */
type Intrinsic = keyof JSX.IntrinsicElements;
type PropsOf<T extends Intrinsic> = JSX.IntrinsicElements[T];

/**
 * createHeadElement:
 * - T: default intrinsic tag (e.g. "h1")
 *
 * Returned component accepts intrinsic props for the chosen `as` tag (or default T),
 * plus Extra props. Extra props are removed before spreading to DOM to avoid invalid attributes.
 */
export function createHeadElement<T extends Intrinsic>(tag?: T) {
  type CompProps<A extends Intrinsic = T> = PropsOf<A> & HeadElementProps;

  function Component(props: HeadElementProps, ref?: Ref<any>) {
    const {
      paletteColor,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      textAlign,
      header,
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
    extraHandled.className = [...collectedClasses, extraHandled.className]
      .filter(Boolean)
      .join(" ");

    const ResolvedTag = tag ?? header

    return createElement(
      (animated as any)[`${ResolvedTag}`],
      { ref, ...extraHandled },
      children
    );
  }

  Component.displayName = `createElement(${String(tag)})`;

  return Component as unknown as <A extends Intrinsic = T>(
    props: CompProps<A> & { ref?: React.Ref<any> }
  ) => JSX.Element;
}
