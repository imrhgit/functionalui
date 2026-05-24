"use client";

import { useUiContext } from "functionalui";
import { ParagraphProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

/**
 * @deprecated will be removed on future version ^0.2.x
 */
const Text_PRef = ({ children, ...props }: ParagraphProps) => {
  const { baseFontSize } = useUiContext();
  const TextComponent = createTextElement<"p">("p", baseFontSize);
  return <TextComponent {...props}>{children}</TextComponent>;
};

export default Text_PRef;
