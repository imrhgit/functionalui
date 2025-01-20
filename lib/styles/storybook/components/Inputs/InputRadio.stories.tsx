import { Meta } from "@storybook/react";
import { Radio as COMPONENT, Text_Span } from "functionalui";
import { useState } from "react";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Inputs/Radio",
	component: COMPONENT,
};

export default meta;

export const InputRadio = () => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<>
			<COMPONENT
				id="radio-id"
				checked={isChecked}
				handleChange={() => setIsChecked((prev) => !prev)}
				vertigo
			>
				<Text_Span>Radio One</Text_Span>
			</COMPONENT>
		</>
	);
};
