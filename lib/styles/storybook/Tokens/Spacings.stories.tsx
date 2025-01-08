import type { Meta } from "@storybook/react";
import { Container, Layout, Text_Span } from "functionalui";
import {
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	Displays,
	Radiuses,
	Spacings as Sps,
} from "functionalui/types";

const meta: Meta<typeof Container> = {
	title: "Tokens/Spacings",
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

const spacings = Object.keys(Sps)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: Sps[key as keyof typeof Sps],
	}));

export const Spacings = () => (
	<Layout>
		{spacings.map((item, idx) => (
			<ShowcaseContainer key={idx}>
				<Container
					margin={item.value}
					bgColor={ColorPalettes.Primary5}
					borderRadius={Radiuses.Size5}
					borderStyle={BorderStyles.Dashed}
					borderWidth={BorderWidths.Size1}
					borderColor={ColorPalettes.Secondary5}
					style={{ width: 200, height: 50 }}
				>
					<Text_Span
						style={{
							textAlign: "center",
							width: "100%",
							height: "100%",
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
				padding={Sps.Size5}
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
