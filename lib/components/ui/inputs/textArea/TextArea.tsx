"use client";

import { Container } from "functionalui/container";
import { F__TextArea } from "functionalui/styled/inputs/text-area";
import {
  BoxSizings,
  ColorPalettes,
  ColorSets,
  Cursors,
  ElementResizes,
  FontFamilies,
  FontSizes,
  FontStyles,
  FontWeights,
  OutlineStyles,
  TextAligns,
} from "functionalui/types";
import {
  ChangeEvent,
  HTMLAttributes,
  type Ref,
  useCallback,
  useRef,
} from "react";
import useAutosizeTextAreaV2 from "../../../../hooks/useAutosizeTextAreaV2";
import useCombinedRef from "../../../../hooks/useCombinedRef";
import {
  TEXT_AREA_SIZE,
  TEXT_AREA_STYLE,
  TextAreaModes,
  TextAreaSizes,
  TextAreaStyles,
} from "../../../../styles/types/ui/inputs/textarea/types";
import TextAreaLabel from "./components/labels/TextAreaLabel";
import cstyles from "./styles.module.css";

interface P extends HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  value?: any;
  modes?: TextAreaModes;
  label: string;
  rows?: number;
  focus?: boolean;
  width?: number;
  required?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  placeholder?: string;
  // methods
  onChange?: (v: ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (...args: any[]) => void;
  handleFocus?: (...args: any[]) => void;
  handleCheck?: (v?: any) => Promise<any> | void;
  // style, sizings
  size?: TextAreaSizes;
  textAreaStyle?: TextAreaStyles;
  textAreaColor?: ColorSets;
  // customization
  labelTextColor?: boolean | ColorPalettes;
  noLabel?: boolean;
  ref?: Ref<HTMLTextAreaElement> | undefined;
  // props passed through to F__TextArea
  type?: string;
  disabled?: boolean;
  min?: number;
  step?: number;
  resize?: ElementResizes;
  textOutlineStyle?: OutlineStyles;
  paletteColor?: ColorPalettes;
  fontSize?: FontSizes;
  fontFamily?: FontFamilies;
  fontWeight?: FontWeights;
  fontStyle?: FontStyles;
  textAlign?: TextAligns;
  cursor?: Cursors;
}

const TextArea = ({
  // required
  id,
  name,
  value,
  modes = TextAreaModes.Default,
  label,
  // optional properties
  required = false,
  rows = 1,
  width,
  fullWidth,
  placeholder = "Insert text", // helperText,
  // methods
  onChange,
  handleBlur,
  handleFocus,
  handleCheck,
  // text area styles -- style, sizings
  size = TextAreaSizes.Default,
  textAreaStyle = TextAreaStyles.Default,
  textAreaColor = ColorSets.Primarys,
  // customization
  labelTextColor,
  noLabel,
  ref,
  ...props
}: P) => {
  const innerRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRef(innerRef, ref);

  useAutosizeTextAreaV2(innerRef, value);

  // const [isFocus, setIsFocus] = useState(focus);
  // const [isEmpty, setIsEmpty] = useState(true);

  const onHandleBlur = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const value = e.target.value.trim();
      if (!value || value !== "") {
        // setIsFocus(true)
        // setIsEmpty(false)
        return;
      } else {
        // setIsFocus(false);
        // setIsEmpty(true)
        if (handleBlur) handleBlur();
        if (handleCheck) await handleCheck();
        return;
      }
    },
    [handleBlur, handleCheck]
  );
  const onHandleFocus = useCallback(() => {
    if (modes === TextAreaModes.Disabled) return;
    // setIsFocus(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    innerRef.current && innerRef.current.focus();
    if (handleFocus) handleFocus();
    return true;
  }, [handleFocus, modes]);

  return (
    <Container
      style={{
        width: fullWidth ? "100%" : width ? width : 350,
        // position: "relative", // to label
      }}
    >
      {!noLabel && (
        <TextAreaLabel
          id={id}
          label={label}
          textAreaColor={textAreaColor}
          size={size}
          labelTextColor={labelTextColor}
        />
      )}
      <Container
        boxSizing={BoxSizings.BorderBox}
        // paddings
        paddingLeft={TEXT_AREA_SIZE[size].paddings.left} // @@ subject to size
        paddingRight={TEXT_AREA_SIZE[size].paddings.right} // @@ subject to size
        paddingTop={TEXT_AREA_SIZE[size].paddings.top} // @@ subject to sizing
        paddingBottom={TEXT_AREA_SIZE[size].paddings.bottom} // @@ subject to sizing
        // borders
        borderColor={ColorPalettes.Primary5} // @@ subject to color
        {...returnBorderStyleWidth(textAreaStyle)}
        // inline styles
        style={{
          paddingTop:
            textAreaStyle !== TextAreaStyles.Outlined &&
            textAreaStyle !== TextAreaStyles.Default
              ? 1
              : "",
          paddingBottom:
            textAreaStyle !== TextAreaStyles.Outlined &&
            textAreaStyle !== TextAreaStyles.Default
              ? 1
              : "",
          cursor: "text",
        }}
        onClick={() => onHandleFocus()}
      >
        <F__TextArea
          ref={combinedRef}
          id={id}
          name={name}
          value={value}
          required={required}
          textOutlineStyle={OutlineStyles.None}
          resize={ElementResizes.None}
          onChange={onChange}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          placeholder={placeholder}
          rows={rows}
          fontSize={TEXT_AREA_SIZE[size].font.size}
          fontWeight={TEXT_AREA_SIZE[size].font.weight}
          className={cstyles.textareaBare}
          {...props}
        />
      </Container>
    </Container>
  );
};

export default TextArea;

const returnBorderStyleWidth = (style: TextAreaStyles) => {
  return {
    // define the top, left, bottom, right first
    borderBottomStyle: TEXT_AREA_STYLE[style]?.borders?.bottom?.style,
    borderWidth: TEXT_AREA_STYLE[style]?.borders?.width,
    borderRadius: TEXT_AREA_STYLE[style]?.borders?.radius,
    borderStyle: TEXT_AREA_STYLE[style]?.borders?.style,
  };
};
