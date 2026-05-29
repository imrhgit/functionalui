"use client";

import { SpanProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

function Text_Span({ children, ...props }: SpanProps) {
  const TextComponent = createTextElement<"span">("span");
  return <TextComponent {...props}>{children}</TextComponent>;
}

export default Text_Span;
