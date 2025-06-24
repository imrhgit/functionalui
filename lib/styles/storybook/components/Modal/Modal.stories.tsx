import { Meta } from "@storybook/react";
import { Modal as COMPONENT } from "functionalui";
import Component from "./component.tsx";

const meta: Meta<typeof COMPONENT> = {
  title: "Components/Modal",
  component: COMPONENT,
};

export default meta;

export const Modal = () => {
  return <Component />;
};
