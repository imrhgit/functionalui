import type { Meta } from "@storybook/react-vite";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_Span } from "functionalui/texts/span";
import {
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	Displays,
	FlexDirections,
	Radiuses,
	SPACING_VALUES,
	Spacings as Sps,
} from "functionalui/types";
import useMeasure from "react-use-measure";

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
		<BarShowcaseContainer>
			{spacings.map((item, idx) => (
				<Bar key={idx} value={item.value} name={item.name} />
			))}
		</BarShowcaseContainer>
	</Layout>
);

const Bar = ({ value, name }: any) => {
	const [ref, bounds] = useMeasure({ debounce: 2000 });
	return (
		<Container marginBottom={Sps.Size5}>
			<Layout display={Displays.Flex}>
				<Layout
					display={Displays.Flex}
					flexDirection={FlexDirections.Column}
					style={{ minWidth: 100 }}
				>
					{/*name*/}
					<Text_Span
						paletteColor={ColorPalettes.Grey1}
						style={{
							height: "100%",
							display: "inline-block",
						}}
					>
						{name}
					</Text_Span>
					{/*value*/}
					<Text_Span
						paletteColor={ColorPalettes.Grey1}
						style={{
							height: "100%",
							display: "inline-block",
						}}
					>
						{bounds.width}
					</Text_Span>
				</Layout>
				{/*bar */}
				<Container
					ref={ref}
					bgColor={ColorPalettes.Primary2}
					style={{ maxWidth: SPACING_VALUES[value], height: 45, flex: 1 }}
					borderRadius={Radiuses.Size5}
					borderStyle={BorderStyles.Dashed}
					borderWidth={BorderWidths.Size0}
					borderColor={ColorPalettes.Secondary5}
				/>
			</Layout>
		</Container>
	);
};

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

const BarShowcaseContainer = ({ children }: any) => {
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
				<Layout>
					<Container>{children}</Container>
				</Layout>

				{/* token */}

				{/* value */}
			</Container>
		</Layout>
	);
};
