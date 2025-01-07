"use client";

import { Layout, useUiContext } from "functionalui";
import {
	COLOR_VALUES,
	ColorPalettes,
	Displays,
	FlexAlignItems,
	FlexJustifyContents,
	Sizings,
} from "functionalui/types";
import { FC } from "react";
import Icon from "./Icon";
import { Themes } from "../../contexts/ui/types";
import Spinner from "./Spinner";

type P = {
	name: string;
	size?: Sizings;
	width?: number;
	height?: number;
	lazy?: boolean;
	colorLight?: ColorPalettes;
	colorDark?: ColorPalettes;
	iconAction?: (v?: any) => void;
};

const ReactIcon: FC<P> = ({
	name,
	size = Sizings.Size3,
	width,
	height,
	colorLight = ColorPalettes.Grey5,
	colorDark = ColorPalettes.Grey5,
	iconAction,
}) => {
	const { theme } = useUiContext();
	const color =
		theme !== Themes.Light ? COLOR_VALUES[colorDark] : COLOR_VALUES[colorLight];
	return (
		<Layout
			onClick={iconAction}
			display={Displays.Flex}
			flexJustifyContent={FlexJustifyContents.Center}
			flexAlignItem={FlexAlignItems.Center}
			style={{ width: width || size, height: height || size }}
		>
			{name === "spinner" ? (
				<Spinner size={size} color={color} />
			) : (
				<Icon
					name={name}
					size={size}
					color={color}
					width={width}
					height={height}
				/>
			)}
		</Layout>
	);
};

export default ReactIcon;
