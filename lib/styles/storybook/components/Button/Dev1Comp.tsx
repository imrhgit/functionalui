// import { Button } from "functionalui/button";
import {
	ColorPalettes,
	FontSizes,
	Radiuses,
	Spacings,
} from "functionalui/types";
import { Button, Container, Text_Span } from "../../../../main.ts";

const Dev1Comp = () => {
	return (
		<div>
			<Button name="testa" />
			<Container style={{ width: "max-content" }}>
				<Container
					padding={Spacings.Size3}
					bgColor={ColorPalettes.Green7}
					borderRadius={Radiuses.Size6}
					paddingLeft={Spacings.Size6}
				>
					<Text_Span fontSize={FontSizes.Size4}>Sifa</Text_Span>
				</Container>
				<Container
					padding={Spacings.Size3}
					bgColor={ColorPalettes.Green7}
					borderRadius={Radiuses.Size6}
					paddingLeft={Spacings.Size6}
				>
					<Text_Span fontSize={FontSizes.Size7}>Sifa</Text_Span>
				</Container>
			</Container>
		</div>
	);
};

export default Dev1Comp;
