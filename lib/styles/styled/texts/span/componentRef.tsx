"use client";

import { useUiContext } from "functionalui";
import { SpanProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

/**
 * @deprecated will be removed on future version ^0.2.x
 */
function Text_SpanRef({ children, ...props }: SpanProps) {
  const { baseFontSize } = useUiContext();
  const TextComponent = createTextElement<"span">("span", baseFontSize);
  return <TextComponent {...props}>{children}</TextComponent>;
}

export default Text_SpanRef;
