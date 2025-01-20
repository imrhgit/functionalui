import {
	BorderStyles,
	BorderWidths,
	ColorPalettes,
	FontSizes,
	Radiuses,
	Spacings,
} from "functionalui/types";

export enum ChipSizes {
	Tiny = 1,
	Small,
	Medium,
	Big,
}
interface ChipSize {
	fontSize: FontSizes;
	paddingTop: Spacings;
	paddingBottom: Spacings;
	paddingLeft: Spacings;
	paddingRight: Spacings;
	borderRadius: Radiuses;
}
export const CHIP_SIZE: { [key: number]: ChipSize } = {
	[ChipSizes.Tiny]: {
		fontSize: FontSizes.Size1,
		paddingTop: Spacings.Size0,
		paddingBottom: Spacings.Size0,
		paddingLeft: Spacings.Size1,
		paddingRight: Spacings.Size1,
		borderRadius: Radiuses.Size7,
	},
	[ChipSizes.Small]: {
		fontSize: FontSizes.Size2,
		paddingTop: Spacings.Size1,
		paddingBottom: Spacings.Size1,
		paddingLeft: Spacings.Size2,
		paddingRight: Spacings.Size2,
		borderRadius: Radiuses.Size7,
	},
	[ChipSizes.Medium]: {
		fontSize: FontSizes.Size3,
		paddingTop: Spacings.Size2,
		paddingBottom: Spacings.Size2,
		paddingLeft: Spacings.Size3,
		paddingRight: Spacings.Size3,
		borderRadius: Radiuses.Size7,
	},
	[ChipSizes.Big]: {
		fontSize: FontSizes.Size4,
		paddingTop: Spacings.Size3,
		paddingBottom: Spacings.Size3,
		paddingLeft: Spacings.Size4,
		paddingRight: Spacings.Size4,
		borderRadius: Radiuses.Size7,
	},
};

export enum ChipStyles {
	Filled = 1,
	Outlined,
}
interface ChipStyle {
	border?: {
		borderColor: ColorPalettes;
		borderStyle: BorderStyles;
		borderWidth: BorderWidths;
	};
	bgColor?: ColorPalettes;
	font: {
		fontColor?: ColorPalettes;
	};
}
export const CHIP_STYLE: { [key: number]: ChipStyle } = {
	[ChipStyles.Filled]: {
		bgColor: ColorPalettes.Primary5,
		font: {
			fontColor: ColorPalettes.Grey9,
		},
	},
	[ChipStyles.Outlined]: {
		border: {
			borderColor: ColorPalettes.Primary5,
			borderStyle: BorderStyles.Solid,
			borderWidth: BorderWidths.Size2,
		},
		font: {
			// fontColor: ColorPalettes.Primary5,
		},
	},
};
