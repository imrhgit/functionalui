import { Meta } from "@storybook/react";
import { InputImage as COMPONENT } from "functionalui";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Inputs/Image",
	component: COMPONENT,
};

export default meta;

export const InputImage = () => {
	const handleImageChange = (v: File | undefined) => {
		console.log(v);
	};
	return (
		<>
			<COMPONENT
				handleImageChange={handleImageChange}
				id="img-id"
				labelname="Add image"
				name="img-id"
			/>
		</>
	);
};
