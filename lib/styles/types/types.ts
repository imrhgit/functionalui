import { AnimatedProps } from "@react-spring/web";
import type { HTMLAttributes, ReactNode } from "react";
import {
  ButtonStyleProps,
  HeaderProps,
  LayoutProps,
  StyleProps,
  TextStyleProps,
} from "./components.types";
import { ElementResizes, OutlineStyles } from "./generics";

export {
  BORDER_BOTTOM_LEFT_RADIUS_CLASSES,
  BORDER_BOTTOM_RIGHT_RADIUS_CLASSES,
  BORDER_BOTTOM_STYLE_CLASSES,
  BORDER_LEFT_STYLE_CLASSES,
  BORDER_RADIUS_CLASSES,
  BORDER_RIGHT_STYLE_CLASSES,
  BORDER_STYLE_CLASSES,
  BORDER_TOP_LEFT_RADIUS_CLASSES,
  BORDER_TOP_RIGHT_RADIUS_CLASSES,
  BORDER_TOP_STYLE_CLASSES,
  BORDER_WIDTH_CLASSES,
  BOX_SHADOW_CLASSES,
  BOX_SIZING_CLASSES,
  ELEMENT_RESIZE_CLASSES,
  FONT_FAMILY_CLASSES,
  FONT_SIZE_CLASSES,
  FONT_STYLE_CLASSES,
  FONT_WEIGHT_CLASSES,
  MARGIN_BOTTOM_CLASSES,
  MARGIN_CLASSES,
  MARGIN_LEFT_CLASSES,
  MARGIN_RIGHT_CLASSES,
  MARGIN_TOP_CLASSES,
  MEDIA_SIZES,
  PADDING_BOTTOM_CLASSES,
  PADDING_CLASSES,
  PADDING_LEFT_CLASSES,
  PADDING_RIGHT_CLASSES,
  PADDING_TOP_CLASSES,
  POSITION_BOTTOM_CLASSES,
  POSITION_LEFT_CLASSES,
  POSITION_RIGHT_CLASSES,
  POSITION_TOP_CLASSES,
  TEXT_ALIGN_CLASSES,
  CURSOR_CLASSES,
} from "./classes";
export {
  BACKGROUND_COLOR_CLASSES,
  BORDER_COLOR_CLASSES,
  COLOR_CLASSES,
  OUTLINE_COLOR_CLASSES,
} from "./colors/classes";
export { ColorPalettes, ColorSets } from "./colors/generics";
export {
  COLOR_VALUES,
  ColorRanges,
  COLOR_RGBA_ALPHA,
  ColorRGBAAlphas,
} from "./colors/values";
export {
  BorderStyles,
  BorderWidths,
  BoxShadows,
  BoxSizings,
  ElementResizes,
  FontFamilies,
  FontSizes,
  FontStyles,
  FontWeights,
  MediaSizes,
  Positions,
  Radiuses,
  Spacings,
  TextAligns,
  OutlineStyles,
  Cursors,
} from "./generics";
export {
  ALIGN_SELF_CLASSES,
  DISPLAY_CLASSES,
  FLEX_ALIGN_CONTENT_CLASSES,
  FLEX_ALIGN_ITEMS_CLASSES,
  FLEX_DIRECTION_CLASSES,
  FLEX_JUSTIFY_CONTENT_CLASSES,
  FLEX_WRAP_CLASSES,
  GRID_ALIGN_CONTENT_CLASSES,
  GRID_COLUMN_GAP_CLASSES,
  GRID_GAP_CLASSES,
  GRID_JUSTIFY_CONTENT_CLASSES,
  GRID_ROW_GAP_CLASSES,
  JUSTIFY_SELF_CLASSES,
} from "./layout/classes";
export {
  AlignSelfs,
  Displays,
  FlexAlignContents,
  FlexAlignItems,
  FlexDirections,
  FlexJustifyContents,
  FlexWraps,
  GridAlignContents,
  GridColumnGaps,
  GridGaps,
  GridJustifyContents,
  GridRowGaps,
  JustifySelfs,
} from "./layout/generics";
export { Sizings } from "./sizings/generics";
export {
  BORDER_STYLE_VALUES,
  BORDER_WIDTH_VALUES,
  BOX_SHADOW_VALUES,
  FONT_SIZE_VALUES,
  RADIUS_VALUES,
  SPACING_VALUES,
} from "./values";

export {
  BASE_FONT_SIZE,
  THEME_CLASSES,
  Themes,
  type UiContextType,
} from "../../contexts/ui/types";
export {
  TOAST_TYPE,
  ToastTypes,
  type ToastNotification,
} from "../types/notification/types";

export type GlobalEventContextType = {
  globalEventRef: any | null;
  handleGlobalEventRef: any | undefined;
  // handleGlobaEventRef: ((props: string, type: ToastTypes) => void) | undefined;
  catchUserAxiosNextApiError: any | undefined;
  catchUserAxiosFetcherError: any | undefined;
};

export interface DivProps
  extends AnimatedProps<HTMLAttributes<HTMLDivElement>>,
    StyleProps {
  children?: ReactNode;
}
export interface LayoutDivProps
  extends AnimatedProps<HTMLAttributes<HTMLDivElement>>,
    LayoutProps {
  children?: ReactNode;
}

export interface ButtonProps
  extends AnimatedProps<HTMLAttributes<HTMLButtonElement>>,
    StyleProps,
    ButtonStyleProps {
  children?: ReactNode;
}

interface TextInputProp {
  type?: string;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  placeholder?: string | undefined;
  name?: string;
  value?: any | undefined;
  min?: number | undefined;
  step?: number | undefined;
}
export interface TextInputProps
  extends AnimatedProps<HTMLAttributes<HTMLInputElement>>,
    TextStyleProps,
    TextInputProp {
  children?: ReactNode;
}

interface TextAreaStyles {
  resize?: ElementResizes;
  outlineStyle?: OutlineStyles;
}

interface TextAreaProp {
  type?: string;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  placeholder?: string | undefined;
  name?: string;
  value?: any | undefined;
  min?: number | undefined;
  step?: number | undefined;
  rows?: number | undefined;
}
export interface TextAreaProps
  extends AnimatedProps<HTMLAttributes<HTMLTextAreaElement>>,
    TextStyleProps,
    TextAreaStyles,
    TextAreaProp {
  children?: ReactNode;
}

export interface LiProps
  extends AnimatedProps<HTMLAttributes<HTMLLIElement>>,
    StyleProps {
  children?: ReactNode;
}

export interface UlProps
  extends AnimatedProps<HTMLAttributes<HTMLUListElement>>,
    StyleProps {
  children?: ReactNode;
}

export interface HeadElementProps
  extends AnimatedProps<HTMLAttributes<HTMLHeadElement>>,
    TextStyleProps,
    HeaderProps {
  children?: ReactNode;
}

export interface ParagraphProps
  extends AnimatedProps<HTMLAttributes<HTMLParagraphElement>>,
    TextStyleProps {
  children?: ReactNode;
}

export interface SpanProps
  extends AnimatedProps<HTMLAttributes<HTMLSpanElement>>,
    TextStyleProps {
  children?: ReactNode;
}

export {
  AdmonitionColors,
  AdmonitionIcons,
  AdmonitionLevels,
  AdmonitionTitles,
  AdmonitionSizes,
  ADMONITION_SIZE,
} from "./ui/admonition/types";
export { AVATAR_SIZE, AvatarSizes } from "./ui/avatar/types";
export {
  BUTTON_COLORS,
  BUTTON_SHADOWS_CLASSES,
  BUTTON_SIZE,
  ButtonColors,
  ButtonIconPositions,
  ButtonShadows,
  ButtonSizes,
  ButtonStateIcon,
  ButtonStates,
  ButtonTypes,
} from "./ui/button/types";
export {
  CHECKBOX_COLORS,
  CHECKBOX_SIZES,
  CheckboxColors,
  CheckboxSizes,
} from "./ui/checkbox/types";

export { TAG_SIZE, TagColorSizes } from "./ui/tag/types";
export { ModalStyles } from "./ui/modal/types";
export { Portals } from "./ui/portal/types";
export {
  INPUT_TEXT_COLOR,
  INPUT_TEXT_SIZE,
  InputTextSizes,
  INPUT_TEXT_STYLE,
  InputTextStyles,
  InputTextModes,
  InputTextTypes,
  InputTextLabelStyles,
} from "./ui/inputs/text/types";
export {
  TEXT_AREA_COLOR,
  TEXT_AREA_SIZE,
  TEXT_AREA_STYLE,
  TextAreaModes,
  TextAreaSizes,
  TextAreaStyles,
} from "./ui/inputs/textarea/types";
export {
  type SelectOption,
  SELECT_STATES,
  SelectStates,
  DropdownHeightStyles,
  DropdownPositions,
  SELECT_SIZES,
  SelectedValuesStyles,
  SelectSizes,
} from "./ui/selectSpring/types";
export type {
  CellStyles,
  TableHeaderElement,
  TableRowCellElement,
  TableRowElement,
} from "./ui/tablegrid/types";
export { type TabMenu } from "./ui/tabs/types";
export {
  TOGGLE_SIZE,
  TOGGLE_STATE_ICON,
  ToggleSizes,
  ToggleStates,
} from "./ui/toggleswitch/types";

export { Icons } from "./icons/icons";
