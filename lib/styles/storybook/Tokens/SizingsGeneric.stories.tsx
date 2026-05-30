import { Meta } from "@storybook/react-vite";
import { UIcon } from "functionalui/icons";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_Span } from "functionalui/texts/span";
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
	title: "Tokens/Sizings/Generic",
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

const genericSizings = Object.keys(STORY_ITEM)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: STORY_ITEM[key as keyof typeof STORY_ITEM],
	}));

export const Generic = () => (
	<Layout>
		{genericSizings.map((item, idx) => (
			<ShowcaseContainer key={idx}>
				<Text_Span
					paletteColor={ColorPalettes.Grey1}
					style={{
						width: "100%",
						display: "inline-block",
					}}
				>
					{item.name}
				</Text_Span>
				<Text_Span
					paletteColor={ColorPalettes.Grey1}
					style={{
						width: "100%",
						display: "inline-block",
					}}
				>
					{item.value}
				</Text_Span>
				<Container
					bgColor={ColorPalettes.Primary2}
					style={{ width: item.value, height: item.value }}
				/>
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
