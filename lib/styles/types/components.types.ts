import {
	AlignSelfs,
	BorderStyles,
	BorderWidths,
	BoxShadows,
	BoxSizings,
	ColorPalettes,
	Displays,
	FlexAlignContents,
	FlexAlignItems,
	FlexDirections,
	FlexJustifyContents,
	FlexWraps,
	FontFamilies,
	FontSizes,
	FontStyles,
	FontWeights,
	GridAlignContents,
	GridColumnGaps,
	GridGaps,
	GridJustifyContents,
	GridRowGaps,
	JustifySelfs,
	Positions,
	Radiuses,
	Spacings,
	TextAligns,
} from "functionalui/types";
// import { ButtonColors, ButtonSizes, ButtonTypes } from "./ui/button/types";

export interface StyleProps {
	// spacings
	margin?: Spacings;
	marginTop?: Spacings;
	marginBottom?: Spacings;
	marginLeft?: Spacings;
	marginRight?: Spacings;
	padding?: Spacings;
	paddingTop?: Spacings;
	paddingBottom?: Spacings;
	paddingLeft?: Spacings;
	paddingRight?: Spacings;
	/* box shadow */
	boxShadow?: BoxShadows;
	/* border */
	// border radius
	borderRadius?: Radiuses;
	borderBottomLeftRadius?: Radiuses;
	borderBottomRightRadius?: Radiuses;
	borderTopLeftRadius?: Radiuses;
	borderTopRightRadius?: Radiuses;
	// border style
	borderStyle?: BorderStyles;
	borderLeftStyle?: BorderStyles;
	borderRightStyle?: BorderStyles;
	borderTopStyle?: BorderStyles;
	borderBottomStyle?: BorderStyles;
	// border width
	borderWidth?: BorderWidths;
	/* color */
	/*
  border color
  text color (color)
  bgcolor
  outline color
  */
	bgColor?: ColorPalettes;
	paletteColor?: ColorPalettes;
	borderColor?: ColorPalettes;
	outlineColor?: ColorPalettes;

	boxSizing?: BoxSizings;
	top?: Positions;
	bottom?: Positions;
	left?: Positions;
	right?: Positions;

	// className?: string; // incompatible with html element classname
}

export interface LayoutProps {
	display?: Displays;
	flexDirection?: FlexDirections;
	flexWrap?: FlexWraps;
	flexJustifyContent?: FlexJustifyContents;
	flexAlignItem?: FlexAlignItems;
	flexAlignContent?: FlexAlignContents;
	gridGap?: GridGaps;
	gridRowGap?: GridRowGaps;
	gridColumnGap?: GridColumnGaps;
	gridJustifyContent?: GridJustifyContents;
	gridAlignContent?: GridAlignContents;
	justifySelf?: JustifySelfs;
	alignSelf?: AlignSelfs;
}

export interface TextStyleProps {
	// color
	paletteColor?: ColorPalettes;
	// size
	fontSize?: FontSizes;
	// font family
	fontFamily?: FontFamilies;
	// font weight
	fontWeight?: FontWeights;
	// font style
	fontStyle?: FontStyles;
	// font variant

	// text align
	textAlign?: TextAligns;
	// -- letter
}

export interface ButtonStyleProps {
	// buttonColor?: ButtonColors;
	// buttonShadow?: BoxShadows;
	// buttonSize?: ButtonSizes;
	// buttonType?: ButtonTypes;
	disabled?: boolean;
}

export interface HeaderProps {
	header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
