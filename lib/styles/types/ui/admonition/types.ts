import {
  ColorPalettes,
  FontSizes,
  FontWeights,
  Sizings,
  Spacings,
} from "functionalui/types";

export enum AdmonitionLevels {
  Info = 1,
  Note,
  Success,
  Warning,
  Attention,
  Error,
}
/** colors
 * types - info, warning, success, error, attention
 * border color
 * bg color
 * title color
 * icon color
 * text description color
 */
export const AdmonitionColors = {
  [AdmonitionLevels.Info]: {
    borderColor: ColorPalettes.Blue4,
    bgColor: ColorPalettes.Blue2,
    textTitleColor: ColorPalettes.Blue6,
    textDescriptionColor: ColorPalettes.Blue9,
    iconColor: ColorPalettes.Blue5,
  },
  [AdmonitionLevels.Note]: {
    borderColor: ColorPalettes.Grey4,
    bgColor: ColorPalettes.Grey2,
    textTitleColor: ColorPalettes.Grey6,
    textDescriptionColor: ColorPalettes.Grey9,
    iconColor: ColorPalettes.Grey5,
  },
  [AdmonitionLevels.Success]: {
    borderColor: ColorPalettes.Green4,
    bgColor: ColorPalettes.Green2,
    textTitleColor: ColorPalettes.Green6,
    textDescriptionColor: ColorPalettes.Green9,
    iconColor: ColorPalettes.Green5,
  },
  [AdmonitionLevels.Warning]: {
    borderColor: ColorPalettes.Yellow4,
    bgColor: ColorPalettes.Yellow2,
    textTitleColor: ColorPalettes.Yellow6,
    textDescriptionColor: ColorPalettes.Yellow9,
    iconColor: ColorPalettes.Yellow5,
  },
  [AdmonitionLevels.Attention]: {
    borderColor: ColorPalettes.Red4,
    bgColor: ColorPalettes.Red2,
    textTitleColor: ColorPalettes.Red6,
    textDescriptionColor: ColorPalettes.Red9,
    iconColor: ColorPalettes.Red5,
  },
  [AdmonitionLevels.Error]: {
    borderColor: ColorPalettes.Red4,
    bgColor: ColorPalettes.Red2,
    textTitleColor: ColorPalettes.Red6,
    textDescriptionColor: ColorPalettes.Red9,
    iconColor: ColorPalettes.Red5,
  },
};
export const AdmonitionIcons = {
  [AdmonitionLevels.Info]: {
    titleIcon: "info",
  },
  [AdmonitionLevels.Note]: {
    titleIcon: "info",
  },
  [AdmonitionLevels.Success]: {
    titleIcon: "check",
  },
  [AdmonitionLevels.Warning]: {
    titleIcon: "alert-circle",
  },
  [AdmonitionLevels.Attention]: {
    titleIcon: "alert-triangle",
  },
  [AdmonitionLevels.Error]: {
    titleIcon: "x-octagon",
  },
};
export const AdmonitionTitles = {
  [AdmonitionLevels.Info]: "Info",
  [AdmonitionLevels.Note]: "Note",
  [AdmonitionLevels.Success]: "Success",
  [AdmonitionLevels.Warning]: "Warning",
  [AdmonitionLevels.Attention]: "Attention",
  [AdmonitionLevels.Error]: "Error",
};

export enum AdmonitionSizes {
  Small = 1,
  Medium,
  Big,
}

interface AdmoitionSize {
  title: {
    padding: Spacings;
    paddingBottom: Spacings;
    paddingLeft?: Spacings;
    paddingRight?: Spacings;
    fontSize: FontSizes;
    fontWeight: FontWeights;
    iconSize: Sizings;
    iconMargin: Spacings;
  };
  content: {
    padding: Spacings;
    paddingTop: Spacings;
    paddingLeft?: Spacings;
    paddingRight?: Spacings;
    fontSize: FontSizes;
  };
}
export const ADMONITION_SIZE: { [key: number]: AdmoitionSize } = {
  [AdmonitionSizes.Small]: {
    title: {
      padding: Spacings.Size1,
      paddingBottom: Spacings.Size1,
      paddingLeft: Spacings.Size2,
      paddingRight: Spacings.Size2,
      fontSize: FontSizes.Size3,
      fontWeight: FontWeights.Size4,
      iconSize: Sizings.Size4,
      iconMargin: Spacings.Size1,
    },
    content: {
      padding: Spacings.Size1,
      paddingTop: Spacings.Size0,
      paddingLeft: Spacings.Size2,
      paddingRight: Spacings.Size2,
      fontSize: FontSizes.Size3,
    },
  },
  [AdmonitionSizes.Medium]: {
    title: {
      padding: Spacings.Size2,
      paddingBottom: Spacings.Size2,
      fontSize: FontSizes.Size5,
      fontWeight: FontWeights.Size3,
      iconSize: Sizings.Size5,
      iconMargin: Spacings.Size1,
    },
    content: {
      padding: Spacings.Size2,
      paddingTop: Spacings.Size0,
      fontSize: FontSizes.Size4,
    },
  },
  [AdmonitionSizes.Big]: {
    title: {
      padding: Spacings.Size3,
      paddingBottom: Spacings.Size3,
      fontSize: FontSizes.Size6,
      fontWeight: FontWeights.Size3,
      iconSize: Sizings.Size7,
      iconMargin: Spacings.Size2,
    },
    content: {
      padding: Spacings.Size3,
      paddingTop: Spacings.Size0,
      fontSize: FontSizes.Size5,
    },
  },
};
