// import { MediaSizes } from "./generics";

// const MEDIA_SIZES = {
// 	[MediaSizes.Mobile]: 480,
// 	[MediaSizes.SmallTablet]: 768,
// 	[MediaSizes.Tablet]: 768,
// 	[MediaSizes.BigTablet]: 810,
// 	[MediaSizes.HalfScreen]: 900,
// 	[MediaSizes.Laptop]: 1024,
// 	[MediaSizes.Large]: 1200,
// 	[MediaSizes.Extra]: 3000000,
// };

// export const mqXW = (n: MediaSizes) => {
// 	const bpArray = Object.keys(MEDIA_SIZES).map((key: string) => [
// 		key,
// 		MEDIA_SIZES[key],
// 	]);

// 	const [result] = bpArray.reduce((acc, [name, size]) => {
// 		if (n === name) return [...acc, `@media (max-width: ${size}px)`];
// 		return acc;
// 	}, []);

// 	return result;
// };
