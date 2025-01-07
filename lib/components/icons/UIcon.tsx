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
import Spinner from "./Spinner";
import { UICON_SIZING } from "../../styles/types/icons/values";

/*
	@todo_20241220_1655("")
	shadow
*/

type P = {
	name: Icons | string;
	size?: Sizings;
	width?: number;
	height?: number;
	lazy?: boolean;
	colorLight?: ColorPalettes;
	colorDark?: ColorPalettes;
	iconAction?: (v?: any) => void;
	animated?: boolean;
};

const UIcon: FC<P> = ({
	name,
	size = Sizings.Size5,
	width,
	height,
	colorLight = ColorPalettes.Grey5,
	colorDark = ColorPalettes.Grey5,
	iconAction,
	animated = true,
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
				borderRadius: "50%",
				overflow: "hidden",
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
				padding={UICON_SIZING[size].padding}
				style={
					clickable
						? {
								...styles,
								borderRadius: "50%",
								display: "flex",
							}
						: {
								borderRadius: "50%",
								display: "flex",
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
