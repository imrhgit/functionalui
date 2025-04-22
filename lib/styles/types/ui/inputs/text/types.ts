import {
    BorderStyles,
    BorderWidths,
  ColorPalettes,
  ColorSets,
  FontSizes,
  FontWeights,
  Radiuses,
  Sizings,
  Spacings,
} from "functionalui/types";

export const INPUT_TEXT_COLOR: { [key: number]: any } = {
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

/**
 * text size
 * label size
 * padding left right
 * padding top bottom
 * border width
 */
export enum InputTextSizes {
  Small = 1,
  Default, // medium
  Big,
  Huge,
}
export const INPUT_TEXT_SIZE: { [key: number]: any } = {
  [InputTextSizes.Small]: {
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
  [InputTextSizes.Default]: {
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
  [InputTextSizes.Big]: {
    paddings: {
      top: Spacings.Size1,
      bottom: Spacings.Size1,
      left: Spacings.Size2,
      right: Spacings.Size2,
    },
    font: {
      size: FontSizes.Size4,
      weight: FontWeights.Size2,
    },
  },
  [InputTextSizes.Huge]: {
    paddings: {
      top: Spacings.Size1,
      bottom: Spacings.Size1,
      left: Spacings.Size2,
      right: Spacings.Size2,
    },
    font: {
      size: FontSizes.Size5,
      weight: FontWeights.Size2,
    },
  },
};



export enum InputTextStyles {
  Default = 1,    // border bottom
  Outlined,       // outline overall
  Filled,         // border bottom & bg color
}
export const INPUT_TEXT_STYLE: { [key: number]: any } = {
  [InputTextStyles.Default]: {
    borders: {
      width: BorderWidths.Size1,
      radius: undefined,
      style: BorderStyles.Solid,
      bottom: {
        style: BorderStyles.Solid,
        width: BorderWidths.Size1
      },
      top: undefined,
      left: undefined,
      right: undefined,
    },
  },
  [InputTextStyles.Outlined]: {
    borders: {
      width: BorderWidths.Size1,
      radius: Radiuses.Size3,
      style: BorderStyles.Solid,
      borders: {
        style: BorderStyles.Solid,
        width: BorderWidths.Size1,
      }
    },
  },
  [InputTextStyles.Filled]: {
    borders: {
      width: BorderWidths.Size1,
      radius: Radiuses.Size5,
      style: BorderStyles.Solid,
      borders: undefined,
    },
  },
}

export enum InputTextModes {
  Default = 1,
  Error,
  Disabled,
  ReadOnly,
  // Focus,
}
export enum InputTextTypes {
  Text = "text",
  Number = "number",
  Password = "password",
}

export enum InputTextLabelStyles {
  Top = 1,
  Material,
}