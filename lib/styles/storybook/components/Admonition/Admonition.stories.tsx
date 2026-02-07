import { Meta } from "@storybook/react-vite";
import { Admonition as COMPONENT, Container } from "functionalui";
import { AdmonitionLevels, AdmonitionSizes } from "functionalui/types";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Admonition",
	component: COMPONENT,
};

export default meta;

export const Sizes = () => {
	return (
		<>
			<COMPONENT
				level={AdmonitionLevels.Info}
				size={AdmonitionSizes.Small}
				descriptionText={
					"This is an Admonition component of AdmonitionLevels.Info level."
				}
			/>
			<br />
			<COMPONENT
				level={AdmonitionLevels.Info}
				descriptionText={
					"This is an Admonition component of AdmonitionLevels.Info level."
				}
			/>
			<br />
			<COMPONENT
				level={AdmonitionLevels.Info}
				size={AdmonitionSizes.Big}
				descriptionText={
					"This is an Admonition component of AdmonitionLevels.Info level."
				}
			/>
		</>
	);
};

const levels = Object.keys(AdmonitionLevels)
	.filter((key) => isNaN(Number(key))) // Filter out numeric keys
	.map((key) => ({
		name: key,
		value: AdmonitionLevels[key as keyof typeof AdmonitionLevels],
	}));
export const Levels = () => {
	return (
		<>
			{levels.map((lvl, idx) => (
				<Container key={idx}>
					<COMPONENT
						level={lvl.value}
						descriptionText={`This is an Admonition component of ${lvl.name} level.`}
					/>
					<br />
				</Container>
			))}
		</>
	);
};
