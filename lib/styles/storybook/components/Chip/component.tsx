import { Chip } from "functionalui/chip";
import { ChipSizes } from "../../../types/ui/chip/types";

const Component = () => {
	return (
		<div>
			<br />
			<Chip size={ChipSizes.Tiny}>Chip component</Chip>
			<br />
			<Chip size={ChipSizes.Small}>Chip component</Chip>
			<br />
			<Chip size={ChipSizes.Medium}>Chip component</Chip>
			<br />
			<Chip size={ChipSizes.Big}>Chip component</Chip>
			<br />
			<Chip size={ChipSizes.Large}>Chip component</Chip>
		</div>
	);
};

export default Component;
