"use client";

import { useEffect } from "react";

export default function useKeyPress(
  keyP: string,
  callback = () => {},
  keyEvent = "keydown",
) {
  const callbackHandler = (e: any) => {
    if (keyP === "space") {
      if (e.key === " ") {
        callback();
        return;
      }
    }
    if (e.key === keyP) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener(keyEvent, callbackHandler, false);
    return () => {
      document.removeEventListener(keyEvent, callbackHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyEvent]);
}
