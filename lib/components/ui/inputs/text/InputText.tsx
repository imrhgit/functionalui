"use client";

import { Container, F__TextInputRef } from "functionalui";
import {
  BoxSizings,
  ColorPalettes,
  ColorSets,
  FontSizes,
  FontWeights,
  SPACING_VALUES,
} from "functionalui/types";
import {
  ChangeEvent,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  INPUT_TEXT_COLOR,
  INPUT_TEXT_SIZE,
  INPUT_TEXT_STYLE,
  InputTextModes,
  InputTextSizes,
  InputTextStyles,
  InputTextTypes,
} from "../../../../styles/types/ui/inputs/text/types";
import InputTextHelper from "../text/components/InputTextHelper";
import ShowHidePassword from "../text/components/ShowHidePassword";
import InputTextLabel from "./components/labels/InputTextLabel";
import cstyles from "./styles.module.css";

/**
 * icon on left or right side
 */

interface P extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type?: InputTextTypes;
  value?: any;
  modes?: InputTextModes;
  label: string;
  // optional properties
  focus?: boolean;
  width?: number | string;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  helperText?: string;

  // numbered input type
  step?: number;
  min?: number;

  // methods
  handleChange?: (v: ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (v?: any) => void;
  handleBlur?: (v?: any) => void;
  handleCheck?: (v?: any) => Promise<any> | void;

  // input tag styles
  fontColor?: ColorPalettes;
  fontWeight?: FontWeights;
  fontSize?: FontSizes;

  // input text styling
  size?: InputTextSizes;
  inputStyle?: InputTextStyles;
  inputColor?: ColorSets;

  // customizations
  /**
   * colors
   * - border color, input text color, label color, icon color
   */
  labelTextColor?: boolean | ColorPalettes;
  transparent?: boolean;
}

const InputText = ({
  // required
  id,
  name,
  type = InputTextTypes.Text,
  value,
  modes = InputTextModes.Default,
  label,
  // optional properties
  focus,
  required,
  width,
  fullWidth,
  helperText,
  placeholder = "Insert text",
  // other types property
  step,
  min,
  // methods
  handleChange,
  handleFocus,
  handleBlur,
  handleCheck,
  // styling
  size = InputTextSizes.Default,
  inputStyle = InputTextStyles.Default,
  inputColor = ColorSets.Primarys,
  // customizations
  labelTextColor = true,
  transparent,
  ...props
}: P) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // const [isFocus, setIsFocus] = useState<boolean>(focus || false)
  // const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (modes === InputTextModes.Disabled) return;
    if (focus) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      inputRef.current && inputRef.current.focus();
      // setIsFocus(true)
      // setIsEmpty(false)
      return;
    }
    if (value !== "" && inputRef.current && inputRef.current.value !== "") {
      // setIsFocus(true)
      // setIsEmpty(false)
    }
  }, [focus, modes, value]);

  const [inputType, setInputType] = useState<InputTextTypes>(type);
  // useEffect(() => {
  //   setInputType(type);
  // }, [type]);
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText((prev) => !prev);
  };
  useEffect(() => {
    if (type === InputTextTypes.Password) {
      if (showText) setInputType(InputTextTypes.Text);
      else setInputType(InputTextTypes.Password);
    }
  }, [showText]);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setIsEmpty(false)
    if (handleChange) {
      handleChange(e);
    }
  };
  const onHandleBlur = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      // setIsFocus(false)
      const value = e.target.value.trim();
      if (!value || value !== "") {
        // setIsFocus(true)
        // setIsEmpty(false)
        return;
      } else {
        // setIsFocus(false)
        // setIsEmpty(true)
        if (handleBlur) handleBlur();
        if (handleCheck) await handleCheck();
        return;
      }
    },
    [handleBlur, handleCheck],
  );
  const onHandleFocus = useCallback(() => {
    if (modes === InputTextModes.Disabled) return;
    // setIsFocus(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    inputRef.current && inputRef.current.focus();
    if (handleFocus) handleFocus();
    return true;
  }, [handleFocus, modes]);

  return (
    <Container
      style={{
        width: fullWidth ? "100%" : width ? width : 350,
        position: "relative", // to label
      }}
    >
      {!transparent && (
        <InputTextLabel
          id={id}
          label={label}
          inputColor={inputColor}
          size={size}
          labelTextColor={labelTextColor}
        />
      )}

      <Container
        /**
         * - to determine the width of the input
         * - to set position relative onto its children
         */
        boxSizing={BoxSizings.BorderBox}
        {...returnBorderStyleWidth(inputStyle, transparent)}
        borderColor={INPUT_TEXT_COLOR[inputColor].borderColor} // @@ subject to color
        paddingLeft={INPUT_TEXT_SIZE[size].paddings.left} // @@ subject to size
        paddingRight={INPUT_TEXT_SIZE[size].paddings.right} // @@ subject to size
        paddingTop={INPUT_TEXT_SIZE[size].paddings.top} // @@ subject to sizing
        paddingBottom={INPUT_TEXT_SIZE[size].paddings.bottom} // @@ subject to sizing
        style={{
          // position: "relative",
          // width: fullWidth ? "100%" : width ? width : 350,
          paddingTop: inputStyle !== InputTextStyles.Outlined ? 1 : "",
          paddingBottom:
            inputStyle !== InputTextStyles.Outlined
              ? SPACING_VALUES[INPUT_TEXT_SIZE[size].paddings.bottom]
              : "",
          // display: size === InputTextSizes.Small ? "flex" : "block",
          display: inputStyle !== InputTextStyles.Outlined ? "flex" : "block",
          cursor: "text",
        }}
        onClick={() => onHandleFocus()}
      >
        <F__TextInputRef
          ref={inputRef}
          type={inputType}
          required={required}
          disabled={modes !== InputTextModes.Disabled ? undefined : true}
          fontSize={INPUT_TEXT_SIZE[size].font.size}
          fontWeight={INPUT_TEXT_SIZE[size].font.weight} // @@ subject to size?
          color={INPUT_TEXT_COLOR[inputColor].fontColor} // @@ subject to color
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          min={min}
          step={step}
          onChange={handleChange ? onHandleChange : undefined}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          className={cstyles.inputtext}
          {...props}
        />
        {type === InputTextTypes.Password && (
          <ShowHidePassword
            isShow={showText}
            handleShowHideText={handleShowText}
          />
        )}
        {helperText && <InputTextHelper inputHelper={helperText} />}
      </Container>
    </Container>
  );
};

export default InputText;

const returnBorderStyleWidth = (
  inputStyle: InputTextStyles,
  transparent: boolean = false,
) => {
  if (transparent) return {};
  return {
    // default
    borderBottomStyle: INPUT_TEXT_STYLE[inputStyle]?.borders?.bottom?.style,
    borderWidth: INPUT_TEXT_STYLE[inputStyle]?.borders?.width,
    // outline
    borderRadius: INPUT_TEXT_STYLE[inputStyle]?.borders?.radius,
    borderStyle: INPUT_TEXT_STYLE[inputStyle]?.borders?.borders?.style,
    // filled
    // borderRadius: undefined,
  };
};
