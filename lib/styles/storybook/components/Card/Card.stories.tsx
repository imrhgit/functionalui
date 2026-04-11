import { Meta } from "@storybook/react-vite";
import { Container as COMPONENT } from "functionalui";
import { ColorPalettes, Radiuses } from "functionalui/types";

const meta: Meta<typeof COMPONENT> = {
  title: "Components/Card",
  component: COMPONENT,
};

export default meta;

export const BorderRadii = () => {
  return (
    <>
      <COMPONENT
        borderTopLeftRadius={Radiuses.Size3}
        borderTopRightRadius={Radiuses.Size6}
        borderBottomLeftRadius={Radiuses.Size9}
        borderBottomRightRadius={Radiuses.Size3}
        style={{ width: 100, height: 100 }}
        bgColor={ColorPalettes.Secondary4}
      />
    </>
  );
};
