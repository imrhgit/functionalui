import { Container, Layout, Text_Span } from "functionalui";
import {
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Spacings,
} from "functionalui/types";
import { useCallback } from "react";
import {
  CheckboxColors,
  CheckboxSizes,
} from "../../../styles/types/ui/checkbox/types";
import Checkbox from "./checkbox/Checkbox";

export type CheckboxOption = {
  id: number;
  name: string;
  value?: any;
  isChecked: boolean;
};
type CheckboxesProps = {
  options: CheckboxOption[];
  multiselect: boolean;
  checkboxColor: CheckboxColors;
  size: CheckboxSizes;
  handleClick: (v: any) => void;
};
const Checkboxes = ({
  options,
  multiselect = false,
  checkboxColor = CheckboxColors.Primary5,
  size = CheckboxSizes.Size1,
  handleClick,
}: CheckboxesProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClickBox = useCallback(
    (id: number) => {
      if (!multiselect) {
        // is not multiselect
        // check if has another already selected
        // eslint-disable-next-line prefer-const
        let anotherCheckedBoxIdx = options.findIndex(
          (i) => i.isChecked === true,
        );
        // eslint-disable-next-line prefer-const
        let currBoxIdx = options.findIndex((i) => i.id === id);
        if (anotherCheckedBoxIdx !== -1) {
          if (currBoxIdx === anotherCheckedBoxIdx) {
            handleClick(id);
          } else {
            // already have another checked box
            handleClick(options[anotherCheckedBoxIdx].id); // find that checked box, uncheck it
            handleClick(id); // check this new box
          }
        } else {
          handleClick(id);
        }
      } else {
        // is multiselect
        handleClick(id);
      }
    },
    [handleClick, multiselect, options],
  );
  return (
    <Layout>
      {options.map((item, idx) => (
        <CheckboxItem
          key={idx}
          checkboxColor={checkboxColor}
          id={item.id}
          name={item.name}
          isChecked={item.isChecked}
          size={size}
          value={item?.value}
          handleClickBox={handleClickBox}
        />
      ))}
    </Layout>
  );
};

export default Checkboxes;

type CheckboxesItemProps = {
  id: number;
  name: string;
  value?: any;
  isChecked: boolean;

  checkboxColor: CheckboxColors;
  size: CheckboxSizes;
  handleClickBox: (id: number, v?: any) => void;
};

const CheckboxItem = ({
  id,
  name,
  value,
  isChecked,
  checkboxColor,
  size,
  handleClickBox,
}: CheckboxesItemProps) => {
  return (
    <Container
      onClick={() => handleClickBox(id, value)}
      style={{ cursor: "pointer" }}
    >
      <Layout
        display={Displays.Flex}
        flexJustifyContent={FlexJustifyContents.Center}
        flexAlignItem={FlexAlignItems.Center}
      >
        {/* box */}
        <Checkbox
          isChecked={isChecked}
          checkboxColor={checkboxColor}
          size={size}
        />
        {/* name */}
        <Container marginLeft={Spacings.Size2}>
          <Text_Span>{name}</Text_Span>
        </Container>
      </Layout>
    </Container>
  );
};
