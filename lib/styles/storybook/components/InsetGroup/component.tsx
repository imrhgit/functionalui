import { InsetGroup } from "functionalui";
import { InsetGroupOption } from "functionalui/types";
import { useState } from "react";

const Component = () => {
	const [options, _] = useState<InsetGroupOption[]>([
		{ id: 1, text: "One", value: "one" },
		{ id: 2, text: "Two", value: "two" },
		{ id: 3, text: "Three", value: "three" },
	]);

	const handleSelect = (opt: InsetGroupOption) => {
		console.log(opt)
	}

	return (
		<div>
			<InsetGroup options={options} id="inset-group-id" setSelect={handleSelect} />
		</div>
	);
};

export default Component;
