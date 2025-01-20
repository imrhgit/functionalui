import { AvatarGroup } from "functionalui";
import { AvatarSizes, FUI__Avatar } from "../../../types/ui/avatar/types";

const Component = () => {
	const avatars: FUI__Avatar[] = [
		{
			name: "One",
			children: null,
		},
		{
			name: "Two",
			children: null,
		},
		{
			name: "Avatar Three",
			children: null,
		},
	];
	return (
		<div>
			<AvatarGroup avatars={avatars} size={AvatarSizes.Size1} />
			<AvatarGroup avatars={avatars} size={AvatarSizes.Size2} />
			<AvatarGroup avatars={avatars} size={AvatarSizes.Size3} />
		</div>
	);
};

export default Component;
