import { Meta } from "@storybook/react-vite";
import { Modal as COMPONENT } from "functionalui/modal";
import Component from "./component.tsx";

const meta: Meta<typeof COMPONENT> = {
  title: "Components/Modal",
  component: COMPONENT,
};

export default meta;

export const Modal = () => {
  return <Component />;
};
