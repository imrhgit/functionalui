import { Meta } from "@storybook/react";
import { InsetGroup as COMPONENT } from "functionalui";
import { InsetGroupOption } from "functionalui/types";
import { useState } from "react";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/InsetGroup",
	component: COMPONENT,
};

export default meta;

export const InsetGroup = () => {
	const [options, _] = useState<InsetGroupOption[]>([
		{ id: 1, text: "One", value: "one" },
		{ id: 2, text: "Two", value: "two" },
		{ id: 3, text: "Three", value: "three" },
	]);
	const handleSelect = (opt: InsetGroupOption) => {
		console.log(opt);
	};
	return (
		<>
			<COMPONENT
				options={options}
				id="inset-group-id"
				setSelect={handleSelect}
			/>
		</>
	);
};
