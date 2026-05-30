import { UIcon } from "functionalui/icons";
import { ColorPalettes, Icons, Sizings } from "functionalui/types";

export default function IconAction() {
  return (
    <>
      <UIcon name={Icons.Send} iconAction={() => {}} size={Sizings.Size8} />
      <UIcon
        name={Icons.Send}
        iconAction={() => {}}
        size={Sizings.Size8}
        withMargin={false}
      />
      <UIcon
        name={Icons.Send}
        iconAction={() => {}}
        size={Sizings.Size8}
        withMargin={false}
        bgColor={ColorPalettes.Transparent}
      />
    </>
  );
}
