"use client";

import { useUiContext } from "functionalui";
import { ParagraphProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

const Text_P = ({ children, ...props }: ParagraphProps) => {
  const { baseFontSize } = useUiContext();
  const TextComponent = createTextElement<"p">("p", baseFontSize);
  return <TextComponent {...props}>{children}</TextComponent>;
};

export default Text_P;
