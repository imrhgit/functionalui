import { TagColor } from "functionalui";
import { TagColorSizes } from "../../../styles/types/ui/tag/types";
import { FC, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import Picker from "./Picker";

interface P {
  defaultColor?: string;
  setInput?: (v: any) => any;
  setColor?: (color: string) => void;
  inputName?: string | undefined;
  closePicker?: ((p?: boolean) => void) | undefined;
  position?: "absolute" | "static";
}
const ColorPicker: FC<P> = ({
  defaultColor = "#eeeeee",
  setInput,
  setColor,
  inputName = undefined,
  closePicker = undefined,
  position = "absolute",
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
    if (setColor) {
      setColor(debouncedColor);
    }
    if (setInput) {
      setInput((prev: any) => ({
        ...prev,
        [`${inputName ? inputName : "edit_color"}`]: debouncedColor,
      }));
    }
  }, [debouncedColor, inputName, setInput, setColor]);

  return (
    <div>
      <div className="title">
        <span>Choose color: </span>
        <TagColor color={selectColor} size={TagColorSizes.Large} />
      </div>
      <Picker
        selectColor={selectColor}
        handleColorChange={handleColorChange}
        position={position}
        closePicker={closePicker}
      />
    </div>
  );
};

export default ColorPicker;
