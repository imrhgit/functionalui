import { animated, AnimatedProps } from "@react-spring/web";
import {
  BASE_FONT_SIZE,
  CURSOR_CLASSES,
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  FontSizes,
  ParagraphProps,
  TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { createElement, JSX, ReactNode, Ref } from "react";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";
import returnSizeStr from "../utils/returnSizeStr";
import { TextStyleProps } from "../../../types/components.types";

/** helper types */

/* define your tag set and per-tag extra props */
type AllowedTags = "span" | "p";

interface SpanProps
  extends AnimatedProps<JSX.IntrinsicElements["span"]>,
    TextStyleProps {
  children?: ReactNode;
  ref?: Ref<HTMLSpanElement | null>;
}

type TagExtraPropsMap = {
  span: SpanProps;
  p: ParagraphProps;
};

/* intrinsic props helper */
type PropsOf<T extends AllowedTags> = JSX.IntrinsicElements[T];

/* component props: intrinsic props for chosen As tag + mapped extra props for that As */
type CompProps<
  Default extends AllowedTags,
  As extends AllowedTags = Default
> = PropsOf<As> &
  TagExtraPropsMap[As] & {
    as?: As;
    children?: React.ReactNode;
    className?: string;
  };

export function createTextElement<T extends AllowedTags>(
  tag?: T,
  baseFontSize?: FontSizes
) {
  function Component<As extends AllowedTags = T>(
    props: CompProps<T, As>,
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
    /* if (fontSize) {
      collectedClasses.push(FONT_SIZE_CLASSES[fontSize]);
    } */
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

  return Component as <As extends AllowedTags = T>(
    props: CompProps<T, As> & { ref?: React.Ref<any> }
  ) => JSX.Element;
}

/**
 * Strongly-typed createElementComponent for React 19.
 *
 * - T: default intrinsic tag (e.g. "span", "div")
 * - Component accepts props for whichever tag is used (default T or `as` override).
 *
 * Overloads ensure that when you pass `as`, TypeScript narrows props to that tag's props.
 */

/* Helper types */
/* type IntrinsicTag = keyof JSX.IntrinsicElements;
type PropsOf<T extends IntrinsicTag> = JSX.IntrinsicElements[T];
type ChildrenProp = { children?: React.ReactNode };
 */
/* Overloads: when as provided, use its props; otherwise use default T's props */
/* export function createTextComponent<T extends IntrinsicTag>(
  tag: T
): {
  <As extends IntrinsicTag = T>(
    props: PropsOf<As> & { as?: As } & ChildrenProp & { ref?: React.Ref<any> }
  ): JSX.Element;
  displayName?: string;
};

export function createTextComponent<T extends IntrinsicTag>(tag: T) {
  const Component = (props: any, ref?: React.Ref<any>) => {
    const { as, children, ...rest } = props;
    const Tag = (as ?? tag) as IntrinsicTag;
    return createElement(Tag, { ref, ...rest }, children);
  };

  // In React 19 functional components can accept a second ref parameter;
  // to keep the runtime behavior compatible across versions, attach a marker so TS understands ref can be passed.
  // We cast to any to apply the overload shape above.
  (Component as any).displayName = `createElement(${String(tag)})`;

  return Component as any;
}
 */
