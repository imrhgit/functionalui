import { type Ref, RefObject, useEffect } from "react";

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (!ref) return;
  if (typeof ref === "function") ref(value);
  else (ref as RefObject<T | null>).current = value;
}

export default function useCombinedRef(
  innerRef: RefObject<HTMLOrSVGElement | null>,
  // forwardedRef: RefObject<HTMLOrSVGElement | null> | undefined
  forwardedRef?: Ref<HTMLOrSVGElement> | undefined,
) {
  useEffect(() => {
    // keep forwardedRef and innerRef in sync on mount/unmount/changes
    assignRef(forwardedRef, innerRef.current);
    return () => {
      assignRef(forwardedRef, null);
    };
  }, [forwardedRef]);

  // when you need to expose the element to both refs immediately (e.g., after render),
  // you can also use a callback ref on the element:
  const combinedRef = (el: HTMLOrSVGElement | null) => {
    innerRef.current = el;
    assignRef(forwardedRef, el);
  };

  return combinedRef;
}
