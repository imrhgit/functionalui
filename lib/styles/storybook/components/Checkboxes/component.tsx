import { Checkboxes } from "functionalui";
import { CheckboxColors } from "functionalui/types";
import { CheckboxOption } from "../../../../components/ui/checkboxes/Checkboxes";
import { useState } from "react";

const options: CheckboxOption[] = [
	{
		id: 1,
		name: "Opt One",
		isChecked: false,
	},
	{
		id: 1,
		name: "Opt Two",
		isChecked: true,
	},
];

const Component = () => {
	const [opts, setOpts] = useState(options)
	return (
		<div>
			<Checkboxes
				checkboxColor={CheckboxColors.Green5}
				options={opts}
				handleClick={(id: any) => {}}
				multiselect={true}
			/>
		</div>
	);
};

export default Component;
