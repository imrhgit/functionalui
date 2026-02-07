import { Meta } from "@storybook/react-vite";
import { Checkbox as COMPONENT } from "functionalui";
import { CheckboxColors } from "functionalui/types";
import { useState } from "react";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Checkbox",
	component: COMPONENT,
};

export default meta;

export const Checkbox = () => {
	const [isChecked, setIsChecked] = useState(true);
	return (
		<>
			<COMPONENT
				isChecked={isChecked}
				checkboxColor={CheckboxColors.Green5}
				onClick={() => setIsChecked((prev) => !prev)}
			/>
			<COMPONENT
				isChecked={isChecked}
				checkboxColor={CheckboxColors.Primary5}
			/>
		</>
	);
};
