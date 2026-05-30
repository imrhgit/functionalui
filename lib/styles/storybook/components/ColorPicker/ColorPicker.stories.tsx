import { Meta } from "@storybook/react-vite";
import { Button } from "functionalui/button";
import { ColorPicker as COMPONENT } from "functionalui/color-picker";
import { Text_Span } from "functionalui/texts/span";
import { Icons } from "functionalui/types";
import { useState } from "react";

const meta: Meta<typeof COMPONENT> = {
	title: "Components/ColorPicker",
	component: COMPONENT,
};

export default meta;

export const ColorPicker = () => {
	const [clr, setClr] = useState<string>("#eeeeee");
	const [clrOpen, setClrOpen] = useState<boolean>(false);
	return (
		<>
			<Button
				name="open picker"
				icon={Icons.Box}
				clickAction={() => setClrOpen((prev) => !prev)}
			/>
			{clrOpen && (
				<COMPONENT defaultColor={clr} setColor={(clr) => setClr(clr)} />
			)}
			{!clrOpen && <Text_Span>Color picker component absolute</Text_Span>}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<COMPONENT position="static" defaultColor={clr} />
			<Text_Span>Color picker component static</Text_Span>
			<br />

			<br />
			<br />
			<br />
			<Text_Span>{clr}</Text_Span>
		</>
	);
};
