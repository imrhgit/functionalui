import { Meta } from "@storybook/react-vite";
import { SelectSpring as COMPONENT } from "functionalui/select-spring";
import Component from "./component.tsx";

const meta: Meta<typeof COMPONENT> = {
  title: "Components/SelectSpring",
  component: COMPONENT,
};

export default meta;

export const SelectSpring = () => {
  return <Component />;
};
