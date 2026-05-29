"use client";

import { ParagraphProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

const Text_P = ({ children, ...props }: ParagraphProps) => {
  const TextComponent = createTextElement<"p">("p");
  return <TextComponent {...props}>{children}</TextComponent>;
};

export default Text_P;
