import { animated } from "@react-spring/web";
import { JSX, createElement } from "react";
import { FONT_COLOR_CLASSES } from "../../../types/colors/classes";

/** helper types */
type Intrinsic = keyof JSX.IntrinsicElements;
type PropsOf<T extends Intrinsic> = JSX.IntrinsicElements[T];

/**
 * createElementComponent:
 * - T: default intrinsic tag (e.g. "h1")
 * - Extra: extra custom props (e.g. HeadElementProps)
 *
 * Returned component accepts intrinsic props for the chosen `as` tag (or default T),
 * plus Extra props. Extra props are removed before spreading to DOM to avoid invalid attributes.
 */
export function createElementComponent<P, T extends Intrinsic>(tag: T) {
  type CompProps<A extends Intrinsic = T> = PropsOf<A> & P;
  // & { as?: A; children?: React.ReactNode; className?: string };

  function Component<A extends Intrinsic = T>(
    props: CompProps<A>,
    ref?: React.Ref<any>
  ) {
    const { as, children, className, ...rest } = props as any;

    // handle Extra props (example: paletteColor) without assuming shape
    const extraHandled = { ...rest };
    if ("paletteColor" in extraHandled) {
      const pc = extraHandled.paletteColor as any;
      if (pc) {
        // build classes from FONT_COLOR_CLASSES and delete the custom prop
        const classes = FONT_COLOR_CLASSES[pc];
        extraHandled.className = [classes, extraHandled.className, className]
          .filter(Boolean)
          .join(" ");
      } else {
        extraHandled.className = [extraHandled.className, className]
          .filter(Boolean)
          .join(" ");
      }
      delete extraHandled.paletteColor;
    } else {
      extraHandled.className = [extraHandled.className, className]
        .filter(Boolean)
        .join(" ");
    }

    const ResolvedTag = (as ?? tag) as any;

    // if default tag and you want animated.* wrapper, render animated.tag
    if (ResolvedTag === tag && tag === "h1") {
      return createElement(
        (animated as any).h1,
        { ref, ...extraHandled },
        children
      );
    }

    return createElement(ResolvedTag, { ref, ...extraHandled }, children);
  }

  Component.displayName = `createElement(${String(tag)})`;

  // React 19: function components can accept ref param directly; return component as-is so refs work.
  return Component as unknown as <A extends Intrinsic = T>(
    props: CompProps<A> & { ref?: React.Ref<any> }
  ) => JSX.Element;
}
