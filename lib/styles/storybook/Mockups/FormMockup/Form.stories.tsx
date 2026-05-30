import { Meta } from "@storybook/react-vite";
import { Button } from "functionalui/button";
import { Container } from "functionalui/container";
import { InputText } from "functionalui/input-text";
import {
	ButtonTypes,
	Icons,
	InputTextTypes,
	Spacings,
} from "functionalui/types";
import { FormEvent } from "react";

const meta: Meta = {
	title: "Mockups / Form Mockup",
};

export default meta;

// export async function formaction() {

// }

export const FormMockup_1 = () => {
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log("handleSubmit");
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Container margin={Spacings.Size2}>
					<InputText
						name="email"
						id="email"
						type={InputTextTypes.Text}
						label="Email"
						defaultValue={"Test email"}
					/>
				</Container>
				<InputText
					name="password"
					id="password"
					type={InputTextTypes.Password}
					label="Password"
					placeholder="Insert password"
					autoFocus
					defaultValue={"Test email"}
				/>
				<Button
					buttonType={ButtonTypes.Submit}
					name="Submit"
					icon={Icons.Save}
				/>
			</form>
		</div>
	);
};
