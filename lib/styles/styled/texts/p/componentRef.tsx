"use client";

import { animated } from "@react-spring/web";
import { useUiContext } from "functionalui";
import {
	COLOR_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	ParagraphProps,
	TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { forwardRef } from "react";
import returnSizeStr from "../utils/returnSizeStr";
import { BASE_FONT_SIZE, THEME_CLASSES } from "../../../../contexts/ui/types";

export const Text_PRef = forwardRef(
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
		}: ParagraphProps,
		ref: any,
	) => {
		const classes: any = {};
		const { theme, baseFontSize } = useUiContext();
		if (fontSize) {
			if (baseFontSize !== BASE_FONT_SIZE) {
				classes[
					FONT_SIZE_CLASSES[
						returnSizeStr(fontSize, baseFontSize - BASE_FONT_SIZE)
					]
				] = true;
			} else classes[FONT_SIZE_CLASSES[fontSize]] = true;
		} else {
			classes[FONT_SIZE_CLASSES[baseFontSize]] = true;
		}
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
			<animated.p
				ref={ref}
				className={`${THEME_CLASSES[theme]} ${Object.keys(classes).join(" ")} ${className ? className : ""}`}
				{...props}
			>
				{children}
			</animated.p>
		);
	},
);

export default Text_PRef;
