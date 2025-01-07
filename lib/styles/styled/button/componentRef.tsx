"use client";

import { animated } from "@react-spring/web";
import {
	BACKGROUND_COLOR_CLASSES,
	BORDER_BOTTOM_LEFT_RADIUS_CLASSES,
	BORDER_BOTTOM_RIGHT_RADIUS_CLASSES,
	BORDER_BOTTOM_STYLE_CLASSES,
	BORDER_COLOR_CLASSES,
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
	ButtonProps,
	COLOR_CLASSES,
	MARGIN_BOTTOM_CLASSES,
	MARGIN_CLASSES,
	MARGIN_LEFT_CLASSES,
	MARGIN_RIGHT_CLASSES,
	MARGIN_TOP_CLASSES,
	OUTLINE_COLOR_CLASSES,
	PADDING_BOTTOM_CLASSES,
	PADDING_CLASSES,
	PADDING_LEFT_CLASSES,
	PADDING_RIGHT_CLASSES,
	PADDING_TOP_CLASSES,
	POSITION_BOTTOM_CLASSES,
	POSITION_LEFT_CLASSES,
	POSITION_RIGHT_CLASSES,
	POSITION_TOP_CLASSES,
} from "functionalui/types";
import { forwardRef } from "react";

const F__ButtonRef = forwardRef(
	(
		{
			margin,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,
			padding,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			boxShadow,
			borderRadius,
			borderBottomLeftRadius,
			borderBottomRightRadius,
			borderTopLeftRadius,
			borderTopRightRadius,
			borderStyle,
			borderLeftStyle,
			borderRightStyle,
			borderTopStyle,
			borderBottomStyle,
			borderWidth,
			bgColor,
			paletteColor,
			borderColor,
			outlineColor,
			boxSizing,
			top,
			bottom,
			left,
			right,

			children,
			className,
			...props
		}: ButtonProps,
		ref: any,
	) => {
		const classes: any = {};
		if (margin) {
			classes[MARGIN_CLASSES[margin]] = true;
		}
		if (marginTop) {
			classes[MARGIN_TOP_CLASSES[marginTop]] = true;
		}
		if (marginBottom) {
			classes[MARGIN_BOTTOM_CLASSES[marginBottom]] = true;
		}
		if (marginLeft) {
			classes[MARGIN_LEFT_CLASSES[marginLeft]] = true;
		}
		if (marginRight) {
			classes[MARGIN_RIGHT_CLASSES[marginRight]] = true;
		}
		if (padding) {
			classes[PADDING_CLASSES[padding]] = true;
		}
		if (paddingTop) {
			classes[PADDING_TOP_CLASSES[paddingTop]] = true;
		}
		if (paddingBottom) {
			classes[PADDING_BOTTOM_CLASSES[paddingBottom]] = true;
		}
		if (paddingLeft) {
			classes[PADDING_LEFT_CLASSES[paddingLeft]] = true;
		}
		if (paddingRight) {
			classes[PADDING_RIGHT_CLASSES[paddingRight]] = true;
		}
		if (boxShadow) {
			classes[BOX_SHADOW_CLASSES[boxShadow]] = true;
		}
		if (borderRadius) {
			classes[BORDER_RADIUS_CLASSES[borderRadius]] = true;
		}
		if (borderBottomLeftRadius) {
			classes[BORDER_TOP_LEFT_RADIUS_CLASSES[borderBottomLeftRadius]] = true;
		}
		if (borderBottomRightRadius) {
			classes[BORDER_TOP_RIGHT_RADIUS_CLASSES[borderBottomRightRadius]] = true;
		}
		if (borderTopLeftRadius) {
			classes[BORDER_BOTTOM_LEFT_RADIUS_CLASSES[borderTopLeftRadius]] = true;
		}
		if (borderTopRightRadius) {
			classes[BORDER_BOTTOM_RIGHT_RADIUS_CLASSES[borderTopRightRadius]] = true;
		}
		if (borderStyle) {
			classes[BORDER_STYLE_CLASSES[borderStyle]] = true;
		}
		if (borderLeftStyle) {
			classes[BORDER_LEFT_STYLE_CLASSES[borderLeftStyle]] = true;
		}
		if (borderRightStyle) {
			classes[BORDER_RIGHT_STYLE_CLASSES[borderRightStyle]] = true;
		}
		if (borderTopStyle) {
			classes[BORDER_TOP_STYLE_CLASSES[borderTopStyle]] = true;
		}
		if (borderBottomStyle) {
			classes[BORDER_BOTTOM_STYLE_CLASSES[borderBottomStyle]] = true;
		}
		if (borderWidth) {
			classes[BORDER_WIDTH_CLASSES[borderWidth]] = true;
		}
		if (bgColor) {
			classes[BACKGROUND_COLOR_CLASSES[bgColor]] = true;
		}
		if (paletteColor) {
			classes[COLOR_CLASSES[paletteColor]] = true;
		}
		if (borderColor) {
			classes[BORDER_COLOR_CLASSES[borderColor]] = true;
		}
		if (outlineColor) {
			classes[OUTLINE_COLOR_CLASSES[outlineColor]] = true;
		}

		if (boxSizing) {
			classes[BOX_SIZING_CLASSES[boxSizing]] = true;
		}
		if (top) {
			classes[POSITION_TOP_CLASSES[top]] = true;
		}
		if (bottom) {
			classes[POSITION_BOTTOM_CLASSES[bottom]] = true;
		}
		if (left) {
			classes[POSITION_LEFT_CLASSES[left]] = true;
		}
		if (right) {
			classes[POSITION_RIGHT_CLASSES[right]] = true;
		}
		return (
			<animated.button
				ref={ref}
				className={`${Object.keys(classes).join(" ")} ${className ? className : ""}`}
				{...props}
			>
				{children}
			</animated.button>
		);
	},
);

export default F__ButtonRef