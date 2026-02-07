import type { Meta } from "@storybook/react-vite";
import { Container, Layout, Text_Span } from "functionalui";
import {
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	Displays,
	FlexDirections,
	RADIUS_VALUES,
	Spacings,
	Radiuses as STORY_ITEM,
} from "functionalui/types";

const meta: Meta<typeof Container> = {
	title: "Tokens/Radius",
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

const radii = Object.keys(STORY_ITEM)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: STORY_ITEM[key as keyof typeof STORY_ITEM],
	}));

export const Radius = () => {
	return (
		<Layout>
			{radii.map((item, idx) => (
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
					{/*value*/}
					<Text_Span
						paletteColor={ColorPalettes.Grey1}
						style={{
							display: "inline-block",
						}}
					>
						{RADIUS_VALUES[item.value]}
					</Text_Span>
					{/*radius*/}
					<Container
						bgColor={ColorPalettes.Primary2}
						borderStyle={BorderStyles.Solid}
						borderRadius={item.value}
						style={{ width: 75, height: 75 }}
					/>
				</ShowcaseContainer>
			))}
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
				<Layout display={Displays.Flex} flexDirection={FlexDirections.Column}>
					{children}
				</Layout>
			</Container>
		</Layout>
	);
};
