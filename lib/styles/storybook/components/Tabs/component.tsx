import { Tabs } from "functionalui/tabs";
import { TabMenu } from "functionalui/types";

const tabMenus: TabMenu[] = [
	{
		name: "Tab One",
	},
	{
		name: "Tab Two",
	},
];

const Component = () => {
	return (
		<>
			<Tabs tab={0} tabMenu={tabMenus} />
		</>
	);
};

export default Component;
