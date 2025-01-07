"use client";

import { useTransition, animated } from "@react-spring/web";
import { Sizings } from "functionalui/types";
import Spinner from "./Spinner";

type Props = {
	isLoading: boolean;
	size?: Sizings;
};
const LoadingSpinner = ({ isLoading, size = Sizings.Size3 }: Props) => {
	const transition = useTransition(isLoading, {
		from: { opacity: 0, scale: 0.6, height: 0 },
		enter: { opacity: 1, scale: 1, height: 30 },
		leave: { opacity: 0, scale: 0.6, height: 0 },
	});
	return transition(
		(styles, item) =>
			item && (
				<animated.div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						...styles,
					}}
				>
					<Spinner size={size} />
				</animated.div>
			),
	);
};

export default LoadingSpinner;
