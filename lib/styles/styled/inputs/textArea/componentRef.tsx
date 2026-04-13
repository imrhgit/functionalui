"use client";

import { animated } from "@react-spring/web";
import {
	COLOR_CLASSES,
	ELEMENT_RESIZE_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	TEXT_ALIGN_CLASSES,
	TextAreaProps,
} from "functionalui/types";
import { forwardRef } from "react";
import { THEME_CLASSES } from "../../../../contexts/ui/types";
import { useUiContext } from "functionalui";
import { OUTLINE_STYLE_CLASSES } from "../../../types/classes";

const F__TextAreaRef = forwardRef(
	(
		{
			paletteColor,
			fontSize,
			fontFamily,
			fontWeight,
			fontStyle,
			textAlign,
			resize,
			textOutlineStyle,
			className,
			children,
			...props
		}: TextAreaProps,
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
		if (resize) {
			classes[ELEMENT_RESIZE_CLASSES[resize]] = true;
		}
		if (textOutlineStyle) {
			classes[OUTLINE_STYLE_CLASSES[textOutlineStyle]] = true;
		}
		return (
			<animated.textarea
				ref={ref}
				className={`${THEME_CLASSES[theme]} ${Object.keys(classes).join(" ")} ${className ? className : ""}`}
				{...props}
			>
				{children}
			</animated.textarea>
		);
	},
);

export default F__TextAreaRef;
