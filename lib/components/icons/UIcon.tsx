"use client";

import { useSpring } from "@react-spring/web";
import { Container, Layout, useUiContext } from "functionalui";
import {
	COLOR_VALUES,
	ColorPalettes,
	Displays,
	FlexAlignItems,
	FlexJustifyContents,
	Icons,
	Sizings,
} from "functionalui/types";
import { FC } from "react";
import { Themes } from "../../contexts/ui/types";
import { Cursors } from "../../styles/types/generics";
import { UICON_SIZING } from "../../styles/types/icons/values";
import Spinner from "./Spinner";

/*
	@todo_20241220_1655("")
	shadow
*/

type P = {
	name: Icons | string;
	withMargin?: boolean;
	size?: Sizings;
	width?: number;
	height?: number;
	lazy?: boolean;
	colorLight?: ColorPalettes;
	colorDark?: ColorPalettes;
	iconAction?: (v?: any) => void;
	animated?: boolean;
	cursor?: Cursors;
	overflow?: string;
	borderRadius?: string;
};

const UIcon: FC<P> = ({
	name,
	size = Sizings.Size5,
	withMargin = true,
	width,
	height,
	colorLight = ColorPalettes.Grey5,
	colorDark = ColorPalettes.Grey5,
	iconAction,
	cursor = Cursors.Default,
	animated = true,
	overflow = "hidden",
	borderRadius = "50%",
}) => {
	const { theme } = useUiContext();
	const [styles, api] = useSpring(() => ({
		backgroundColor: COLOR_VALUES[ColorPalettes.Transparent],
		scale: 1.0,
	}));
	const color =
		theme !== Themes.Light ? COLOR_VALUES[colorDark] : COLOR_VALUES[colorLight];
	const clickable = animated && typeof iconAction !== "undefined";
	return (
		<Layout
			onClick={iconAction}
			display={Displays.Flex}
			flexJustifyContent={FlexJustifyContents.Center}
			flexAlignItem={FlexAlignItems.Center}
			style={{
				// width: width || size,
				// height: height || size,
				width: "max-content",
				color: color,
				cursor: clickable ? "pointer" : "default",
				borderRadius: borderRadius,
				overflow: overflow,
			}}
			// hover
			onMouseEnter={() =>
				clickable &&
				api.start({
					backgroundColor: COLOR_VALUES[ColorPalettes.Primary3],
				})
			}
			onMouseLeave={() =>
				clickable &&
				api.start({
					backgroundColor: COLOR_VALUES[ColorPalettes.Transparent],
				})
			}
			// click
			onMouseDown={() =>
				clickable &&
				api.start({
					backgroundColor: COLOR_VALUES[ColorPalettes.Primary2],
					scale: 0.85,
				})
			}
			onMouseUp={() =>
				clickable &&
				api.start({
					backgroundColor: COLOR_VALUES[ColorPalettes.Primary3],
					scale: 1.0,
				})
			}
		>
			<Container
				padding={withMargin ? UICON_SIZING[size].padding : undefined}
				cursor={cursor}
				style={
					clickable
						? {
								...styles,
								borderRadius: borderRadius,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								minWidth: UICON_SIZING[size].size + 3,
								minHeight: UICON_SIZING[size].size + 3,
							}
						: {
								borderRadius: borderRadius,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								minWidth: UICON_SIZING[size].size + 3,
								minHeight: UICON_SIZING[size].size + 3,
							}
				}
			>
				{name === "spinner" ? (
					<Spinner size={UICON_SIZING[size].size} color={color} />
				) : (
					<svg
						width={width || UICON_SIZING[size].size}
						height={height || UICON_SIZING[size].size}
						fill="none"
						stroke={color}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<use href={`/feather-sprite.svg#${name}`} />
					</svg>
				)}
			</Container>
		</Layout>
	);
};

export default UIcon;
