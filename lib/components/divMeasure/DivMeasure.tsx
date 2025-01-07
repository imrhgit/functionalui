"use client";

import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useMemo,
} from "react";
import useMeasure from "react-use-measure";

interface P {
  children: ReactNode;
  inherit?: boolean; // follow its parent, not the content
  width?: "100%" | "auto" | number;
  height?: "100%" | "auto" | number;
}
const DivMeasure: FC<P> = ({
  children,
  inherit = false,
  width = "auto",
  height = "auto",
}) => {
  const [ref, bound] = useMeasure();
  const h = useMemo(() => bound.height, [bound.height]);
  const w = useMemo(() => bound.width, [bound.width]);

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (isValidElement(child)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return cloneElement(child, { width: w, height: h });
    }
    return child;
  });

  return (
    <div
      ref={ref}
      style={{
        width: inherit ? "inherit" : width,
        height: inherit ? "inherit" : height,
      }}
    >
      {childrenWithProps}
    </div>
  );
};

export default DivMeasure;
