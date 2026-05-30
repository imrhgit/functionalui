import { SelectSpring } from "functionalui/select-spring";
import { SelectOption } from "functionalui/types";

const options: SelectOption[] = [
  { id: 1, text: "Option 1", selected: false },
  { id: 2, text: "Option 2", selected: false },
  { id: 3, text: "Option 3", selected: false },
  { id: 4, text: "Option 4", selected: false },
  { id: 5, text: "Option 5", selected: false },
  { id: 6, text: "Option 6", selected: false },
  { id: 7, text: "Option 7", selected: false },
  { id: 8, text: "Option 8", selected: false },
];

const Component = () => {
  return (
    <>
      <SelectSpring
        id="select-sb"
        options={options}
        setSelectedIdx={() => {}}
        title="Select options"
      />
    </>
  );
};

export default Component;
