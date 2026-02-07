import { Meta } from "@storybook/react-vite";
import { Container, Layout, Text_Span } from "functionalui";
import {
	BorderStyles,
	BorderWidths,
	COLOR_VALUES,
	ColorPalettes,
	ColorRanges,
	Displays,
	FlexDirections,
	FlexWraps,
	Spacings,
	ColorSets as STORY_ITEM,
} from "functionalui/types";

const meta: Meta<typeof Container> = {
	title: "Tokens/Colors",
	parameters: {
		controls: {
			disable: true,
		},
		actions: {
			disable: true,
		},
	},
};

export default meta;

const colorSets = Object.keys(STORY_ITEM)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: STORY_ITEM[key as keyof typeof STORY_ITEM],
	}));
// how to create list of color palette / ranges from a color set?
const colorPalettes = colorSets.map((item) => {
	// [...Array(11 - 2 + 1).keys()].map(i => i + 2).forEach(num => console.log(num));
	let ccolors = [
		...Array(
			ColorRanges[item.value][1] - ColorRanges[item.value][0] + 1,
		).keys(),
	].map((i) => COLOR_VALUES[i + ColorRanges[item.value][0]]);
	// .forEach((v) => v);
	return {
		name: item.name,
		value: item.value,
		colors: ccolors,
	};
});
export const Colors = () => {
	return (
		<Layout>
			{colorPalettes.map(
				(item: { name: string; value: number; colors: string[] }, idx) => (
					<ShowcaseContainer key={idx}>
						{/*name*/}
						<Text_Span
							paletteColor={ColorPalettes.Grey1}
							style={{
								display: "inline-block",
							}}
						>
							{item.name}
						</Text_Span>
						{/*colors*/}
						<Layout
							display={Displays.Flex}
							flexDirection={FlexDirections.Column}
							flexWrap={FlexWraps.Wrap}
						>
							{item.colors.map((clr, ky) => (
								<ColorItem key={ky} value={clr} />
							))}
						</Layout>
					</ShowcaseContainer>
				),
			)}
		</Layout>
	);
};
const ColorItem = ({ value }: any) => {
	return (
		<Layout display={Displays.Flex}>
			{/*show color*/}
			<Container style={{ backgroundColor: value, width: 75, height: 75 }} />
			{/*color value*/}
			<Text_Span
				paletteColor={ColorPalettes.Grey1}
				style={{
					display: "inline-block",
				}}
			>
				{value}
			</Text_Span>
		</Layout>
	);
};

const ShowcaseContainer = ({ children }: any) => {
	return (
		<Layout>
			<Container
				borderBottomStyle={BorderStyles.Solid}
				borderWidth={BorderWidths.Size1}
				borderColor={ColorPalettes.Grey9}
				padding={Spacings.Size5}
				style={{ backgroundColor: "#ffffff" }}
			>
				{children}
			</Container>
		</Layout>
	);
};
