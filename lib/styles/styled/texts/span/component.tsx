"use client";

import { useUiContext } from "functionalui";
import { SpanProps } from "functionalui/types";
import { createTextElement } from "../utils/createTextElement";

function Text_Span({ children, ...props }: SpanProps) {
  const { baseFontSize } = useUiContext();
  const TextComponent = createTextElement<"span">("span", baseFontSize);
  return (
    <TextComponent
      defaultValue={props.defaultValue as any}
      defaultChecked={props.defaultChecked as any}
      suppressContentEditableWarning={
        props.suppressContentEditableWarning as any
      }
      suppressHydrationWarning={props.suppressHydrationWarning as any}
      accessKey={props.accessKey as any}
      autoCapitalize={props.autoCapitalize as any}
      autoFocus={props.autoFocus as any}
      className={props.className as any}
      contentEditable={props.contentEditable as any}
      contextMenu={props.contextMenu as any}
      
      {...props}
    >
      {children}
    </TextComponent>
  );
}

export default Text_Span;
