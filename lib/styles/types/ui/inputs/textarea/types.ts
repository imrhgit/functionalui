import {
  BorderStyles,
  BorderWidths,
  ColorPalettes,
  ColorSets,
  FontSizes,
  FontWeights,
  Radiuses,
  Spacings,
} from "functionalui/types";

export enum TextAreaStyles {
  Default = 1, // outline
  Outlined, // outline overall
  Filled, // border bottom & bg color
  BorderBottom,
  Transparent,
}
export const TEXT_AREA_STYLE: { [key: number]: any } = {
  [TextAreaStyles.BorderBottom]: {
    borders: {
      width: BorderWidths.Size1,
      bottom: {
        style: BorderStyles.Solid,
      },
      top: undefined,
      left: undefined,
      right: undefined,
    },
  },
  [TextAreaStyles.Default]: {
    // same as outline
    borders: {
      width: BorderWidths.Size1,
      radius: Radiuses.Size3,
      style: BorderStyles.Solid,
    },
  },
  [TextAreaStyles.Outlined]: {
    borders: {
      width: BorderWidths.Size1,
      radius: Radiuses.Size3,
      style: BorderStyles.Solid,
    },
  },
  [TextAreaStyles.Filled]: {
    borders: {
      width: undefined,
      radius: undefined,
      style: undefined,
    },
  },
  [TextAreaStyles.Transparent]: {
    borders: {
      width: undefined,
      radius: undefined,
      style: undefined,
    },
  },
};

export enum TextAreaSizes {
  Small = 1,
  Default, // medium
  Big,
  Huge,
}
export const TEXT_AREA_SIZE: { [key: number]: any } = {
  [TextAreaSizes.Small]: {
    paddings: {
      top: Spacings.Size1,
      bottom: Spacings.Size1,
      left: Spacings.Size2,
      right: Spacings.Size2,
    },
    font: {
      size: FontSizes.Size1,
      weight: FontWeights.Size2,
    },
  },
  [TextAreaSizes.Default]: {
    paddings: {
      top: Spacings.Size1,
      bottom: Spacings.Size1,
      left: Spacings.Size2,
      right: Spacings.Size2,
    },
    font: {
      size: FontSizes.Size3,
      weight: FontWeights.Size2,
    },
  },
  [TextAreaSizes.Big]: {
    paddings: {
      top: Spacings.Size2,
      bottom: Spacings.Size2,
      left: Spacings.Size3,
      right: Spacings.Size3,
    },
    font: {
      size: FontSizes.Size4,
      weight: FontWeights.Size2,
    },
  },
  [TextAreaSizes.Huge]: {
    paddings: {
      top: Spacings.Size2,
      bottom: Spacings.Size2,
      left: Spacings.Size3,
      right: Spacings.Size3,
    },
    font: {
      size: FontSizes.Size4,
      weight: FontWeights.Size2,
    },
  },
};

export enum TextAreaModes {
  Default = 1,
  Error,
  Disabled,
  ReadOnly,
  // Focus,
}

export const TEXT_AREA_COLOR: { [key: number]: any } = {
  [ColorSets.Transparents]: undefined,
  [ColorSets.Greys]: {
    borderColor: ColorPalettes.Grey5,
    labelColor: ColorPalettes.Grey10,
    fontColor: ColorPalettes.Grey5,
    bgColor: ColorPalettes.Grey3, // @@ subject to theme
  },
  [ColorSets.Primarys]: {
    borderColor: ColorPalettes.Primary5,
    labelColor: ColorPalettes.Primary5,
    fontColor: ColorPalettes.Grey10,
    bgColor: ColorPalettes.Primary3,
  },
  [ColorSets.Secondarys]: {
    borderColor: ColorPalettes.Secondary5,
    labelColor: ColorPalettes.Secondary5,
    fontColor: ColorPalettes.Grey10,
    bgColor: ColorPalettes.Secondary3,
  },
  [ColorSets.Reds]: {
    borderColor: ColorPalettes.Red5,
    labelColor: ColorPalettes.Red5,
    fontColor: ColorPalettes.Grey10,
    bgColor: ColorPalettes.Red3,
  },
  [ColorSets.Greens]: {
    borderColor: ColorPalettes.Green5,
    labelColor: ColorPalettes.Green5,
    fontColor: ColorPalettes.Grey10,
    bgColor: ColorPalettes.Green3,
  },
  [ColorSets.Blues]: {
    borderColor: ColorPalettes.Blue5,
    labelColor: ColorPalettes.Blue5,
    fontColor: ColorPalettes.Grey10,
    bgColor: ColorPalettes.Blue3,
  },
  [ColorSets.Yellows]: {
    borderColor: ColorPalettes.Yellow5,
    labelColor: ColorPalettes.Yellow5,
    fontColor: ColorPalettes.Grey10,
    bgColor: ColorPalettes.Yellow3,
  },
};
