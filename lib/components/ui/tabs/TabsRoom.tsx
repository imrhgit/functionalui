import { useSpring } from "@react-spring/web";
import { Container } from "functionalui";
import {
	BoxShadows,
	BoxSizings,
	ColorPalettes,
	Radiuses,
	Spacings,
} from "functionalui/types";

interface P {
	height: number;
	width: number;
	tabRoomWidth: number;
	activeItem: number;
}
const TabsRoom = ({ height, tabRoomWidth, activeItem }: P) => {
	const [styles, api] = useSpring(() => ({
		from: { x: 0 },
	}));
	api.start({ x: tabRoomWidth * activeItem });
	return (
		<Container
			borderRadius={Radiuses.Size5}
			boxShadow={BoxShadows.Size1}
			// top={PositionTop.Size1} //top: 4,
			// left={PositionLeft.Size1} //left: 4
			// margin={Margins.Size1}
			padding={Spacings.Size1}
			boxSizing={BoxSizings.BorderBox}
			style={{
				position: "absolute",
				height: height,
				width: tabRoomWidth,
				zIndex: 10,
				...styles,
			}}
		>
			<Container
				borderRadius={Radiuses.Size4}
				bgColor={ColorPalettes.Grey2}
				style={{ width: "100%", height: "100%" }}
			>
				<></>
			</Container>
		</Container>
	);
};

export default TabsRoom;
