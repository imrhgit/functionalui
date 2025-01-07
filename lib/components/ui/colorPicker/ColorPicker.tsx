import { TagColor } from "functionalui";
import { TagColorSizes } from "../../../styles/types/ui/tag/types";
import { FC, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import Picker from "./Picker";

interface P {
  defaultColor?: string;
  setInput?: (v: any) => any;
  inputName?: string | undefined;
  closePicker?: ((p?: boolean) => void) | undefined;
}
const ColorPicker: FC<P> = ({
  defaultColor = "#eeeeee",
  setInput,
  inputName = undefined,
  closePicker = undefined,
}) => {
  const [selectColor, setSelectColor] = useState(
    defaultColor ? defaultColor : "#eee",
  );
  useEffect(() => {
    if (!defaultColor) {
      setSelectColor("#eee");
    } else {
      setSelectColor(defaultColor);
    }
  }, [defaultColor]);

  const handleColorChange = (color: string) => {
    setSelectColor(color);
  };

  const debouncedColor = useDebounce(selectColor, 250);
  useEffect(() => {
    if (setInput) {
      setInput((prev: any) => ({
        ...prev,
        [`${inputName ? inputName : "edit_color"}`]: debouncedColor,
      }));
    }
  }, [debouncedColor, inputName, setInput]);

  return (
    <div>
      <div className="title">
        <span>Choose color: </span>
        <TagColor color={selectColor} size={TagColorSizes.Large} />
      </div>
      <Picker
        selectColor={selectColor}
        handleColorChange={handleColorChange}
        position="absolute"
        closePicker={closePicker}
      />
    </div>
  );
};

export default ColorPicker;
