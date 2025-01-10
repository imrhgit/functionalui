import {
  BorderStyles,
  BorderWidths,
  BoxShadows,
  FontSizes,
  Radiuses,
  Spacings,
} from "./generics";

export const SPACING_VALUES: { [key: number]: string } = {
  [Spacings.Size0]: "clamp(0rem, calc(0rem + 0vw), 0rem)",
  [Spacings.Size1]: "clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)",
  [Spacings.Size2]: "clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)",
  [Spacings.Size3]: "clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)",
  [Spacings.Size4]: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
  [Spacings.Size5]: "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)",
  [Spacings.Size6]: "clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)",
  [Spacings.Size7]: "clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)",
  [Spacings.Size8]: "clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)",
  [Spacings.Size9]: "clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)",
};
export const BOX_SHADOW_VALUES: { [key: number]: string } = {
  [BoxShadows.Size0]: "0 0 0 0 rgb(0  0  0 / 0), 0 0 0 0 rgb(0 0 0 / 0)",
  [BoxShadows.Size1]: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 0 0 0 rgba(0, 0, 0, 0)",
  [BoxShadows.Size2]:
    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  [BoxShadows.Size3]:
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  [BoxShadows.Size4]:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  [BoxShadows.Size5]:
    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  [BoxShadows.Size6]:
    "0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 0 0 rgba(0, 0, 0, 0)",
};
export const RADIUS_VALUES: { [key: number]: number } = {
  [Radiuses.Size0]: 0,
  [Radiuses.Size1]: 3,
  [Radiuses.Size2]: 5,
  [Radiuses.Size3]: 7,
  [Radiuses.Size4]: 11,
  [Radiuses.Size5]: 13,
  [Radiuses.Size6]: 17,
  [Radiuses.Size7]: 23,
  [Radiuses.Size8]: 27,
  [Radiuses.Size9]: 31,
};
export const BORDER_STYLE_VALUES: { [key: number]: string } = {
  [BorderStyles.None]: "none",
  [BorderStyles.Hidden]: "hidden",
  [BorderStyles.Dotted]: "dotted",
  [BorderStyles.Dashed]: "dashed",
  [BorderStyles.Solid]: "solid",
  [BorderStyles.Double]: "double",
  [BorderStyles.Groove]: "groove",
  [BorderStyles.Ridge]: "ridge",
  [BorderStyles.Inset]: "inset",
  [BorderStyles.Outset]: "outset",
};
export const BORDER_WIDTH_VALUES: { [key: number]: number } = {
  [BorderWidths.Size0]: 0,
  [BorderWidths.Size1]: 1,
  [BorderWidths.Size2]: 2,
  [BorderWidths.Size3]: 3,
  [BorderWidths.Size4]: 4,
  [BorderWidths.Size5]: 5,
  [BorderWidths.Size6]: 6,
  [BorderWidths.Size7]: 7,
};
export const FONT_SIZE_VALUES: { [key: number]: string } = {
  [FontSizes.Size1]: "clamp(0.76rem, calc(0.76rem + 0.02vw), 0.77rem)", //smallest
  [FontSizes.Size2]: "clamp(0.86rem, calc(0.86rem + 0.02vw), 0.875rem)",
  [FontSizes.Size3]: "clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)",
  [FontSizes.Size4]: "clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)",
  [FontSizes.Size5]: "clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)",
  [FontSizes.Size6]: "clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)",
  [FontSizes.Size7]: "clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)",
  [FontSizes.Size8]: "clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)", //largest
  [FontSizes.Size9]: "clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)", //largest
  [FontSizes.Size10]: "clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)", //largest
};
