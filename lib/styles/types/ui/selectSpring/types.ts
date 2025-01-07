import {
  BorderWidths,
  ColorPalettes,
  FontSizes,
  Radiuses,
  Sizings,
  Spacings,
} from "functionalui/types";

export interface SelectOption {
  id: string | number;
  text: string;
  selected: boolean;
}

export enum SelectStates {
  Default = 1,
  Selected,
  Error,
  Disabled,
  ReadOnly,
  Required,
  // isLoading,
  // isUpdating,
  // Required,
}

export const SELECT_STATES = {
  [SelectStates.Default]: {
    header: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    dropdown: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    info: {
      label: undefined,
      labelColor: ColorPalettes.Grey10,
    },
  },
  [SelectStates.Selected]: {
    header: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    dropdown: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    info: {
      label: undefined,
      labelColor: ColorPalettes.Grey10,
    },
  },
  [SelectStates.Error]: {
    header: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    dropdown: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    info: {
      label: "Error",
      labelColor: ColorPalettes.Grey10,
    },
  },
  [SelectStates.Disabled]: {
    header: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    dropdown: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    info: {
      label: "Disabled",
      labelColor: ColorPalettes.Grey10,
    },
  },
  [SelectStates.ReadOnly]: {
    header: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    dropdown: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    info: {
      label: "Read only",
      labelColor: ColorPalettes.Grey10,
    },
  },
  [SelectStates.Required]: {
    header: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    dropdown: {
      borderRadius: Radiuses.Size5,
      borderWidth: BorderWidths.Size1,
      borderColor: ColorPalettes.Grey5,
      bgColor: ColorPalettes.Grey2,
    },
    info: {
      label: "Required",
      labelColor: ColorPalettes.Grey10,
    },
  },
};

/**
 * border styles - has border | no border - dont include here
 * dont do too many border styles - its confusing
 * dropdown styles
 */
export enum DropdownHeightStyles {
  Default = 1,
  AutoHeight, // the dropdown itself will determine the height automatically
}
export enum DropdownPositions {
  Top = 1,
  Bottom,
}
// header styles
export enum SelectedValuesStyles {
  Text = 1,
  Chip,
}

/**
 * border width -- error | none | selected |
 * border radius
 * font size
 * title size -- padding
 * li sizes -- padding
 */
export enum SelectSizes {
  Small = 1,
  Medium,
  Big,
}
export const SELECT_SIZES = {
  [SelectSizes.Small]: {
    li: {
      paddingLeft: Spacings.Size2,
      paddingRight: Spacings.Size2,
      paddingTop: Spacings.Size1,
      PaddingRights: Spacings.Size1,
    },
    font: {
      size: FontSizes.Size2,
    },
    icon: {
      size: Sizings.Size2,
    },
  },
  [SelectSizes.Medium]: {
    li: {
      paddingLeft: Spacings.Size3,
      paddingRight: Spacings.Size3,
      paddingTop: Spacings.Size2,
      PaddingRights: Spacings.Size2,
    },
    font: {
      size: FontSizes.Size3,
    },
    icon: {
      size: Sizings.Size3,
    },
  },
  [SelectSizes.Big]: {
    li: {
      paddingLeft: Spacings.Size4,
      paddingRight: Spacings.Size4,
      paddingTop: Spacings.Size3,
      PaddingRights: Spacings.Size3,
    },
    font: {
      size: FontSizes.Size4,
    },
    icon: {
      size: Sizings.Size4,
    },
  },
};
