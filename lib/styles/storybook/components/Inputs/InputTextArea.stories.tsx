import { Meta } from "@storybook/react";
import { TextArea as COMPONENT, Text_Header } from "functionalui";
import { TextAreaSizes } from "functionalui/types";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Inputs/TextArea",
	component: COMPONENT,
};

export default meta;

export const InputTextarea = () => {
	const [value, setValue] = useState("");
	return (
		<>
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setValue(e.target?.value || "")
				}
				id="textarea-id"
				label="Textarea label"
				name="textarea-id"
				value={value}
			/>

			{/* sizes */}
			<br />
			<br />
			<Text_Header header="h3">Sizes</Text_Header>
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-small"
				label="Textarea label -- Small"
				name="text-id-small"
				value={value}
				size={TextAreaSizes.Small}
			/>
			<br />
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-default"
				label="Textarea label -- Default"
				name="text-id-default"
				value={value}
			/>
			<br />
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-big"
				label="Textarea label -- Big"
				name="text-id-big"
				value={value}
				size={TextAreaSizes.Big}
			/>
			<br />
			<COMPONENT
				handleChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setValue(e.target?.value || "")
				}
				id="text-id-huge"
				label="Textarea label -- Huge"
				name="text-id-huge"
				value={value}
				size={TextAreaSizes.Huge}
			/>
			<br />

			{/* styles */}
			<br />
			<br />
			<Text_Header header="h3">Styles</Text_Header>
		</>
	);
};
