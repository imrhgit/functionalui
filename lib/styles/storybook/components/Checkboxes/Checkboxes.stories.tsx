import { Meta } from "@storybook/react-vite";
import { Checkboxes as COMPONENT } from "functionalui/checkboxes";
import { CheckboxOption } from "../../../../components/ui/checkboxes/Checkboxes";
import { useState } from "react";
import { CheckboxColors } from "functionalui/types";
import update from "immutability-helper";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Checkboxes",
	component: COMPONENT,
};

export default meta;

const options: CheckboxOption[] = [
	{
		id: 1,
		name: "Opt One",
		isChecked: false,
	},
	{
		id: 2,
		name: "Opt Two",
		isChecked: true,
	},
];
export const Checkboxes = () => {
	const [opts, setOpts] = useState(options);
	const [opts2, setOpts2] = useState(options);
	return (
		<>
			<COMPONENT
				checkboxColor={CheckboxColors.Green5}
				options={opts}
				handleClick={(id: number) => {
					setOpts((prev) =>
						update(prev, {
							[findIndex(prev, id)]: {
								$toggle: ["isChecked"],
							},
						}),
					);
				}}
				multiselect={false}
			/>
			<br />
			<COMPONENT
				checkboxColor={CheckboxColors.Green5}
				options={opts2}
				handleClick={(id: any) => {
					setOpts2((prev) =>
						update(prev, {
							[findIndex(prev, id)]: {
								$toggle: ["isChecked"],
							},
						}),
					);
				}}
				multiselect={true}
			/>
		</>
	);
};

const findIndex = (options: CheckboxOption[], id: number) => {
	const idx = options.findIndex((i) => i.id === id);
	return idx;
};
