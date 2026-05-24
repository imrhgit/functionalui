"use client";

import { useUiContext } from "functionalui";
import { ParagraphProps } from "functionalui/types";
import { FC } from "react";
import { createTextElement } from "../utils/createTextElement3";

const Text_P: FC<ParagraphProps> = ({ children, ...props }) => {
  const { baseFontSize } = useUiContext();
  const TextComponent = createTextElement<"p">("p", baseFontSize);
  return <TextComponent {...props}>{children}</TextComponent>;
};

export default Text_P;
