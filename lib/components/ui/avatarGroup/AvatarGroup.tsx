import { animated, useSprings } from "@react-spring/web";
import { Avatar, Layout } from "functionalui";
import { AvatarSizes, ColorPalettes, Displays } from "functionalui/types";
import { FC } from "react";
import { FUI__Avatar } from "../../../styles/types/ui/avatar/types";

/*
hover will highlight the hovered avatar
*/

interface P {
	avatars: FUI__Avatar[];
	isLoading?: boolean;
	size?: AvatarSizes;
	withHover?: boolean;
	border?: boolean;
	borderColor?: ColorPalettes;
}
const AvatarGroup: FC<P> = ({
	avatars,
	border,
	borderColor,
	withHover,
	size,
}) => {
	const [props, api] = useSprings(
		avatars.length,
		(i) => ({
			y: 0,
			x: i === 0 ? 0 : i * -10,
		}),
		[],
	);
	return (
		<Layout display={Displays.Flex}>
			{props.map((p, i) => (
				<animated.div
					key={i}
					style={p}
					// hover
					onMouseEnter={() =>
						api.start((pidx) => {
							if (pidx === i) {
								return { y: -5 };
							}
						})
					}
					onMouseLeave={() =>
						api.start((pidx) => {
							if (pidx === i) {
								return { y: 0 };
							}
						})
					}
					// @todo_20241227_1643("click")
				>
					<Avatar
						avatarName={avatars[i].name}
						border={border}
						borderColor={borderColor}
						onClick={avatars[i].onClick}
						isLoading={avatars[i].isLoading}
						withHover={withHover}
						size={size}
					>
						{avatars[i].children}
					</Avatar>
				</animated.div>
			))}
		</Layout>
	);
};

export default AvatarGroup;
