import { Meta } from "@storybook/react-vite";
import { Tabs as COMPONENT } from "functionalui/tabs";
import Component from "./component.tsx";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Tabs",
	component: COMPONENT,
};

export default meta;

export const Tabs = () => {
	return <Component />;
};
