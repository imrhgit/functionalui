import { Meta } from "@storybook/react";
import { Button, Container, Layout, Text_Span } from "functionalui";
import {
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	Displays,
	FlexAlignItems,
	Icons,
	Radiuses,
	Spacings,
	ButtonSizes as STORY_ITEM,
} from "functionalui/types";

const meta: Meta<typeof Button> = {
	title: "Tokens/Sizings/Button",
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

const buttonSizes = Object.keys(STORY_ITEM)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: STORY_ITEM[key as keyof typeof STORY_ITEM],
	}));

export const Default = () => (
	<Layout>
		{buttonSizes.map((item, idx) => (
			<ShowcaseContainer key={idx}>
				<Layout display={Displays.Flex} flexAlignItem={FlexAlignItems.Center}>
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
					<Button name={`Button${item.value}`} buttonSize={item.value} />
					<Button
						name={`Button${item.value}`}
						buttonSize={item.value}
						icon={Icons.Box}
					/>
				</Layout>
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
						// bgColor={ColorPalettes.Primary2}
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
