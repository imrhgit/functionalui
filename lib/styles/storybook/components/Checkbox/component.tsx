import { Checkbox } from "functionalui";
import { CheckboxColors } from "functionalui/types";

const Component = () => {
	return (
		<div>
			<Checkbox isChecked={true} checkboxColor={CheckboxColors.Green5} />
			<Checkbox isChecked={true} checkboxColor={CheckboxColors.Primary5} />
		</div>
	);
};

export default Component;
