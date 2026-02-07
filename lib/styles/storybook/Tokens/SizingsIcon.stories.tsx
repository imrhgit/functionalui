import { Meta } from "@storybook/react-vite";
import { UIcon } from "functionalui";
import { Container, Layout, Text_Span } from "functionalui";
import {
	Sizings as STORY_ITEM,
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	Displays,
	Radiuses,
	Spacings,
} from "functionalui/types";

const meta: Meta<typeof UIcon> = {
	title: "Tokens/Sizings/Icon",
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

const iconSizings = Object.keys(STORY_ITEM)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: STORY_ITEM[key as keyof typeof STORY_ITEM],
	}));

export const Default = () => (
	<Layout>
		{iconSizings.map((item, idx) => (
			<ShowcaseContainer key={idx}>
				<UIcon size={item.value} name="trash" />
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

export const IconOnClick = () => (
	<Layout>
		{iconSizings.map((item, idx) => (
			<ShowcaseContainer key={idx}>
				<UIcon size={item.value} name="trash" iconAction={() => {}} />
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
			</ShowcaseContainer>
		))}
	</Layout>
);