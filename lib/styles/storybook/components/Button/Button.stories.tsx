import { Meta } from "@storybook/react";
import { Button, Container, Layout, Text_Span } from "functionalui";
import {
	BorderStyles,
	BorderWidths,
	ButtonSizes,
	ColorPalettes,
	Displays,
	GridAlignContents,
	GridJustifyContents,
	Icons,
	Radiuses,
	Spacings,
} from "functionalui/types";
import { ButtonStates, ButtonStyles } from "../../../types/ui/button/types";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
};

export default meta;

const buttonStyles = Object.keys(ButtonStyles)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: ButtonStyles[key as keyof typeof ButtonStyles],
	}));
export const Styles = () => {
	return (
		<Layout>
			{buttonStyles.map((item, idx) => (
				<ShowcaseContainer key={idx}>
					<Layout
						display={Displays.Grid}
						gridAlignContent={GridAlignContents.Center}
						gridJustifyContent={GridJustifyContents.Center}
						style={{ gridTemplateColumns: "100px 150px 150px" }}
					>
						<Text_Span paletteColor={ColorPalettes.Grey1}>
							{item.name}
						</Text_Span>
						<Button
							buttonStyle={item.value}
							name="Button"
							buttonSize={ButtonSizes.Small}
						/>
						<Button
							buttonStyle={item.value}
							name="Button"
							icon={Icons.Box}
							buttonSize={ButtonSizes.Small}
						/>
					</Layout>
				</ShowcaseContainer>
			))}
		</Layout>
	);
};

// type StatesStory = StoryObj<typeof Button>;
// export const States: StatesStory = {
// 	args: {
// 		buttonState: ButtonStates.Icon,
// 		icon: Icons.Award,
// 		name: "Button Eg",
// 	},
// };
const buttonStates = Object.keys(ButtonStates)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: ButtonStates[key as keyof typeof ButtonStates],
	}));
export const States = () => {
	return (
		<Layout>
			{buttonStates.map((item, idx) => (
				<ShowcaseContainer key={idx}>
					<Layout
						display={Displays.Grid}
						gridAlignContent={GridAlignContents.Center}
						gridJustifyContent={GridJustifyContents.Center}
						style={{ gridTemplateColumns: "100px repeat(5, 150px)" }}
					>
						<Text_Span paletteColor={ColorPalettes.Grey1}>
							{item.name}
						</Text_Span>
						{/* Plain */}
						<Button
							buttonStyle={ButtonStyles.Plain}
							buttonState={item.value}
							name="Button"
							buttonSize={ButtonSizes.Small}
						/>
						{/* Gray */}
						<Button
							buttonStyle={ButtonStyles.Gray}
							buttonState={item.value}
							name="Button"
							icon={Icons.Box}
							buttonSize={ButtonSizes.Small}
						/>
						{/* Tinted */}
						<Button
							buttonStyle={ButtonStyles.Tinted}
							buttonState={item.value}
							name="Button"
							icon={Icons.Box}
							buttonSize={ButtonSizes.Small}
						/>
						{/* Outlined */}
						<Button
							buttonStyle={ButtonStyles.Outlined}
							buttonState={item.value}
							name="Button"
							icon={Icons.Box}
							buttonSize={ButtonSizes.Small}
						/>
						{/* Filled */}
						<Button
							buttonStyle={ButtonStyles.Filled}
							buttonState={item.value}
							name="Button"
							icon={Icons.Box}
							buttonSize={ButtonSizes.Small}
						/>
					</Layout>
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
