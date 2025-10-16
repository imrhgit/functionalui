import { Meta } from "@storybook/react";
import { Tabs as COMPONENT } from "functionalui";
import Component from "./component.tsx";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/Tabs",
	component: COMPONENT,
};

export default meta;

export const Tabs = () => {
	return <Component />;
};
