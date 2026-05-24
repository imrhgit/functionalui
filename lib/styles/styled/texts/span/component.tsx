"use client";

import { useUiContext } from "functionalui";
import { SpanProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

function Text_Span({ children, ...props }: SpanProps) {
  const { baseFontSize } = useUiContext();
  const TextComponent = createTextElement<"span">("span", baseFontSize);
  return <TextComponent {...props}>{children}</TextComponent>;
}

export default Text_Span;
