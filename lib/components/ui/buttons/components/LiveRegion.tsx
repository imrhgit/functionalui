"use client";

import { Container } from "functionalui/container";
import { useEffect, useRef, useState } from "react";
import { ButtonStates } from "../../../../styles/types/ui/button/types";

const stateLabels: Record<ButtonStates, string> = {
  [ButtonStates.Loading]: "Loading",
  [ButtonStates.Success]: "Success",
  [ButtonStates.Error]: "Error",
  [ButtonStates.Disabled]: "Disabled",
  [ButtonStates.Icon]: "",
};

const LiveRegion = ({ buttonState }: { buttonState: ButtonStates }) => {
  const [text, setText] = useState("");
  const prevState = useRef(buttonState);

  useEffect(() => {
    if (prevState.current !== buttonState) {
      const label = stateLabels[buttonState];
      if (label) {
        setText(label);
      }
    }
    prevState.current = buttonState;
  }, [buttonState]);

  return (
    <Container
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {text}
    </Container>
  );
};

export default LiveRegion;
