import { ColorPalettes } from "functionalui/types";

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
    titleIcon: "check-cirlce",
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
