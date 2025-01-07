"use client";

import { animated } from "@react-spring/web";
import {
	COLOR_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	TEXT_ALIGN_CLASSES,
	TextInputProps,
} from "functionalui/types";
import { FC } from "react";
import { THEME_CLASSES } from "../../../../contexts/ui/types";
import { useUiContext } from "functionalui";

const F__TextInput: FC<TextInputProps> = ({
	paletteColor,
	fontSize,
	fontFamily,
	fontWeight,
	fontStyle,
	textAlign,
	className,
	children,
	...props
}) => {
	const classes: any = {};
	const { theme } = useUiContext();
	if (paletteColor) {
		classes[COLOR_CLASSES[paletteColor]] = true;
	}
	if (fontSize) {
		classes[FONT_SIZE_CLASSES[fontSize]] = true;
	}
	if (fontFamily) {
		classes[FONT_FAMILY_CLASSES[fontFamily]] = true;
	}
	if (fontWeight) {
		classes[FONT_WEIGHT_CLASSES[fontWeight]] = true;
	}
	if (fontStyle) {
		classes[FONT_STYLE_CLASSES[fontStyle]] = true;
	}
	if (textAlign) {
		classes[TEXT_ALIGN_CLASSES[textAlign]] = true;
	}
	return (
		<animated.input
			className={`${THEME_CLASSES[theme]} ${Object.keys(classes).join(" ")} ${className ? className : ""}`}
			{...props}
		>
			{children}
		</animated.input>
	);
};

export default F__TextInput;
