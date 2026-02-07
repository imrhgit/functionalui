import { Meta } from "@storybook/react-vite";
import { Chip as COMPONENT } from "functionalui";
import { ChipSizes, ChipStyles } from "../../../types/ui/chip/types";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Chip",
	component: COMPONENT,
};

export default meta;

export const Chip = () => {
	return (
		<>
			<COMPONENT size={ChipSizes.Tiny}>Chip component</COMPONENT>
			<br />
			<COMPONENT size={ChipSizes.Small}>Chip component</COMPONENT>
			<br />
			<COMPONENT size={ChipSizes.Medium}>Chip component</COMPONENT>
			<br />
			<COMPONENT size={ChipSizes.Big}>Chip component</COMPONENT>

			<br />
			<br />
			<br />

			<COMPONENT size={ChipSizes.Tiny} chipStyle={ChipStyles.Filled}>
				Chip component
			</COMPONENT>
			<br />
			<COMPONENT size={ChipSizes.Small} chipStyle={ChipStyles.Outlined}>
				Chip component
			</COMPONENT>
			<br />
			<COMPONENT size={ChipSizes.Medium} chipStyle={ChipStyles.Outlined}>
				Chip component
			</COMPONENT>
			<br />
			<COMPONENT size={ChipSizes.Big} chipStyle={ChipStyles.Filled}>
				Chip component
			</COMPONENT>
		</>
	);
};
