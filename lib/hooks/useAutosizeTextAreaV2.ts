import { RefObject, useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
// const useAutosizeTextAreaV2 = (
//   textAreaRef: HTMLTextAreaElement | null,
//   value: string
// ) => {
//   useEffect(() => {
//     if (textAreaRef) {
//       // We need to reset the height momentarily to get the correct scrollHeight for the textarea
//       textAreaRef.style.height = "0px";
//       const scrollHeight = textAreaRef.scrollHeight;

//       // We then set the height directly, outside of the render loop
//       // Trying to set this with state or a ref will product an incorrect value.
//       textAreaRef.style.height = scrollHeight + "px";
//     }
//   }, [textAreaRef, value]);
// };

// export default useAutosizeTextAreaV2;
export default function useAutosizeTextAreaV2(
  textAreaRef: RefObject<HTMLTextAreaElement | null>,
  value: string
) {
  useEffect(() => {
    if (textAreaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);
}

// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848
