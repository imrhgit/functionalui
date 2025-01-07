"use client";

import { animated } from "@react-spring/web";
import { useUiContext } from "functionalui";
import {
	COLOR_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	TEXT_ALIGN_CLASSES,
	TextInputProps,
} from "functionalui/types";
import { forwardRef } from "react";
import { THEME_CLASSES } from "../../../../contexts/ui/types";

const F__TextInputRef = forwardRef(
	(
		{
			paletteColor,
			fontSize,
			fontFamily,
			fontWeight,
			fontStyle,
			textAlign,
			className,
			children,
			...props
		}: TextInputProps,
		ref: any,
	) => {
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
				ref={ref}
				className={`${THEME_CLASSES[theme]} ${Object.keys(classes).join(" ")} ${className ? className : ""}`}
				{...props}
			>
				{children}
			</animated.input>
		);
	},
);

export default F__TextInputRef;
