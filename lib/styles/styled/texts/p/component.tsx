"use client";

import { animated } from "@react-spring/web";
import {
	COLOR_CLASSES,
	FONT_FAMILY_CLASSES,
	FONT_SIZE_CLASSES,
	FONT_STYLE_CLASSES,
	FONT_WEIGHT_CLASSES,
	ParagraphProps,
	TEXT_ALIGN_CLASSES,
} from "functionalui/types";
import { FC } from "react";
import { BASE_FONT_SIZE, THEME_CLASSES } from "../../../../contexts/ui/types";
import { useUiContext } from "functionalui";
import returnSizeStr from "../utils/returnSizeStr";

const Text_P: FC<ParagraphProps> = ({
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
			className={`${THEME_CLASSES[theme]} ${Object.keys(classes).join(" ")} ${className ? className : ""}`}
			{...props}
		>
			{children}
		</animated.p>
	);
};

export default Text_P;
