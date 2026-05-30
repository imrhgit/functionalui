import { Container, ContainerRef } from "functionalui/container";
import { F__Li } from "functionalui/styled/li";
import { Layout } from "functionalui/layout";
import { Text_Span } from "functionalui/texts/span";
import { UIcon } from "functionalui/icons";
import {
	BorderStyles,
	BorderWidths,
	BoxShadows,
	ColorPalettes,
	Icons,
	Sizings,
	Spacings,
} from "functionalui/types";
import { useState } from "react";
import DropdownSC from "./dev/DropdownSC";
import DropdownSC2 from "./dev/DropdownSC2";
import DropdownSC3 from "./dev/DropdownSC3";
import useClickOutsideDOM from "../../../../hooks/useClickOutsideDOM";

const ExampleOne = () => {
	return (
		<Container>
			{/*<One />*/}
			<Two />
			<Three />
		</Container>
	);
};

export default ExampleOne;

const One = () => {
	const [open, setOpen] = useState(false);
	return (
		<Container style={{ position: "relative" }}>
			{/*the menu icon*/}
			<UIcon
				name={Icons.Menu}
				size={Sizings.Size4}
				iconAction={() => setOpen((prev) => !prev)}
			/>
			{/*the menu popup*/}
			<DropdownSC isOpen={open} w={100} h={100}>
				<Container
					padding={Spacings.Size3}
					bgColor={ColorPalettes.Primary5}
					boxShadow={BoxShadows.Size4}
				>
					<Text_Span paletteColor={ColorPalettes.Grey5}>Menu One</Text_Span>
				</Container>
			</DropdownSC>
		</Container>
	);
};

const Two = () => {
	const [open, setOpen] = useState(false);
	return (
		<Container style={{ position: "relative" }}>
			{/*the menu icon*/}
			<UIcon
				name={Icons.Menu}
				size={Sizings.Size4}
				iconAction={() => setOpen((prev) => !prev)}
			/>
			{/*the menu popup*/}
			<DropdownSC2 isOpen={open} w={100} h={100}>
				<Container
					padding={Spacings.Size3}
					bgColor={ColorPalettes.Primary5}
					boxShadow={BoxShadows.Size4}
				>
					<Layout>
						<F__Li
							borderColor={ColorPalettes.Grey9}
							borderWidth={BorderWidths.Size1}
							borderStyle={BorderStyles.Solid}
						>
							one two three
						</F__Li>
						<F__Li
							borderColor={ColorPalettes.Grey9}
							borderWidth={BorderWidths.Size1}
							borderStyle={BorderStyles.Solid}
						>
							four five six
						</F__Li>
						<F__Li
							borderColor={ColorPalettes.Grey9}
							borderWidth={BorderWidths.Size1}
							borderStyle={BorderStyles.Solid}
						>
							seven eight nine
						</F__Li>
					</Layout>
				</Container>
			</DropdownSC2>
		</Container>
	);
};

const Three = () => {
	const [open, setOpen] = useState(false);
	const ref = useClickOutsideDOM(() => {
		setOpen(false);
	});
	return (
		<ContainerRef
			ref={ref}
			style={{ position: "relative", width: "max-content" }}
		>
			{/*the menu icon*/}
			<UIcon
				name={Icons.Menu}
				size={Sizings.Size4}
				iconAction={() => setOpen((prev) => !prev)}
			/>
			{/*the menu popup*/}
			<DropdownSC3 isOpen={open} w={100} h={100}>
				<Container
					// padding={Spacings.Size3}
					bgColor={ColorPalettes.Grey2}
					boxShadow={BoxShadows.Size4}
				>
					<Layout>
						<F__Li
							paddingTop={Spacings.Size2}
							paddingBottom={Spacings.Size2}
							paddingLeft={Spacings.Size3}
							paddingRight={Spacings.Size3}
							borderStyle={BorderStyles.None}
							borderBottomStyle={BorderStyles.Solid}
							borderColor={ColorPalettes.Grey3}
							borderWidth={BorderWidths.Size1}
						>
							<Text_Span>one two three</Text_Span>
						</F__Li>
						<F__Li
							paddingTop={Spacings.Size2}
							paddingBottom={Spacings.Size2}
							paddingLeft={Spacings.Size3}
							paddingRight={Spacings.Size3}
							borderStyle={BorderStyles.None}
							borderBottomStyle={BorderStyles.Solid}
							borderColor={ColorPalettes.Grey3}
							borderWidth={BorderWidths.Size1}
						>
							<Text_Span>four five six</Text_Span>
						</F__Li>
						<F__Li
							paddingTop={Spacings.Size2}
							paddingBottom={Spacings.Size2}
							paddingLeft={Spacings.Size3}
							paddingRight={Spacings.Size3}
							borderStyle={BorderStyles.None}
							borderBottomStyle={BorderStyles.Solid}
							borderColor={ColorPalettes.Grey3}
							borderWidth={BorderWidths.Size1}
						>
							<Text_Span>seven eight nine</Text_Span>
						</F__Li>
					</Layout>
				</Container>
			</DropdownSC3>
		</ContainerRef>
	);
};
