import { Meta } from "@storybook/react-vite";
import { Avatar as COMPONENT } from "functionalui";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Avatar",
	component: COMPONENT,
};

export default meta;

export const Avatar = () => {
	return <>
		<COMPONENT avatarName={"Test Name"} border={false} />
	</>;
};
