"use client";

import { SpanProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

/**
 * @deprecated will be removed on future version ^0.2.x
 */
function Text_SpanRef({ children, ...props }: SpanProps) {
  const TextComponent = createTextElement<"span">("span");
  return <TextComponent {...props}>{children}</TextComponent>;
}

export default Text_SpanRef;
