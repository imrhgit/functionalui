import { Meta } from "@storybook/react-vite";
import { InputText as COMPONENT } from "functionalui/input-text";
import { Text_Header } from "functionalui/texts/header";
import { InputTextSizes } from "functionalui/types";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Inputs/Text",
	component: COMPONENT,
};

export default meta;

export const InputText = () => {
	const [value, setValue] = useState("");
	return (
		<>
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id"
				label="Input text label"
				name="text-id"
				value={value}
			/>

			{/* sizes */}
			<br />
			<br />
			<Text_Header header="h3">Sizes</Text_Header>
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-small"
				label="Input text label -- Small"
				name="text-id-small"
				value={value}
				size={InputTextSizes.Small}
			/>
			<br />
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-small"
				label="Input text label -- Default"
				name="text-id-small"
				value={value}
			/>
			<br />
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-small"
				label="Input text label -- Big"
				name="text-id-small"
				value={value}
				size={InputTextSizes.Big}
			/>
			<br />
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-small"
				label="Input text label -- Huge"
				name="text-id-small"
				value={value}
				size={InputTextSizes.Huge}
			/>
			<br />

			{/* styles */}
			<br />
			<br />
			<Text_Header header="h3">Styles</Text_Header>
		</>
	);
};
