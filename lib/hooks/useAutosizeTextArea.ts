import { useEffect } from "react";

const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement, value: any) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      textAreaRef.style.height = scrollHeight + "px";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;