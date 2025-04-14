import { Meta } from "@storybook/react";
import { TableGrid as COMPONENT } from "functionalui";
import Component from "./component.tsx";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/TableGrid",
	component: COMPONENT,
};

export default meta;

export const TableGrid = () => {
	return <Component />;
};
