import { Meta } from "@storybook/react";
import { Container, Layout, Text_Span } from "functionalui";
import {
	BoxShadows as STORY_ITEM,
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	Displays,
	Radiuses,
	Spacings,
} from "functionalui/types";

const meta: Meta<typeof Container> = {
	title: "Tokens/Shadows",
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

const shadows = Object.keys(STORY_ITEM)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: STORY_ITEM[key as keyof typeof STORY_ITEM],
	}));

export const Shadows = () => (
	<Layout>
		{shadows.map((item, idx) => (
			<ShowcaseContainer key={idx}>
				<Container
					boxShadow={item.value}
					// bgColor={ColorPalettes.Grey9}
					borderRadius={Radiuses.Size5}
					// borderStyle={BorderStyles.Dashed}
					// borderWidth={BorderWidths.Size1}
					borderColor={ColorPalettes.Secondary5}
					style={{ width: 200, height: 75, backgroundColor: "white" }}
				>
					<Text_Span
						paletteColor={ColorPalettes.Grey1}
						style={{
							textAlign: "center",
							width: "100%",
							display: "inline-block",
						}}
					>
						{item.name}
					</Text_Span>
				</Container>
			</ShowcaseContainer>
		))}
	</Layout>
);

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
				{/* showcase */}
				<Layout display={Displays.Flex}>
					<Container
						bgColor={ColorPalettes.Primary2}
						borderRadius={Radiuses.Size6}
						style={{
							width: "min-content",
						}}
					>
						{children}
					</Container>
				</Layout>

				{/* token */}

				{/* value */}
			</Container>
		</Layout>
	);
};
