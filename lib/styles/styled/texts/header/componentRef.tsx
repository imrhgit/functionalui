"use client";

import { useUiContext } from "functionalui";
import {
	COLOR_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	HeadElementProps,
	TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { forwardRef } from "react";
import { THEME_CLASSES } from "../../../../contexts/ui/types";
import { HeaderRef } from "./Header";

const Text_HeaderRef = forwardRef(
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
		}: HeadElementProps,
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
			<HeaderRef
				ref={ref}
				className={`${THEME_CLASSES[theme]} ${Object.keys(classes).join(" ")} ${className ? className : ""}`}
				{...props}
			>
				{children}
			</HeaderRef>
		);
	},
);

export default Text_HeaderRef;
