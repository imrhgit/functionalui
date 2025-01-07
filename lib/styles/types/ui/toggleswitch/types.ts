export enum ToggleStates {
  Icon = 1,
  Loading,
  Success,
  Error,
  Disabled,
}
export const TOGGLE_STATE_ICON = {
  [ToggleStates.Icon]: null,
  [ToggleStates.Loading]: "spinner",
  [ToggleStates.Success]: "check",
  [ToggleStates.Error]: "x",
  [ToggleStates.Disabled]: "minus-circle",
};

export enum ToggleSizes {
  Tiny = 1,
  Smaller,
  Small,
  Medium,
  Big,
  Large,
}
// container size, bg size, thumb size, icon, borderradius
type elementSize = {
  w: number;
  h: number;
};
type ToggleSizeType = {
  container: elementSize;
  bg: elementSize;
  thumb: elementSize;
  icon: elementSize;
  bgBorderRadius: string;
  thumbBR: string;
};
interface ToggleSizeLiteral {
  [key: number]: ToggleSizeType;
}
export const TOGGLE_SIZE: ToggleSizeLiteral = {
  [ToggleSizes.Tiny]: {
    container: { w: 60, h: 34 },
    bg: { w: 60, h: 34 },
    thumb: { w: 26, h: 26 },
    bgBorderRadius: "17px",
    thumbBR: "50%",
    icon: { w: 20, h: 20 },
  },
  [ToggleSizes.Smaller]: {
    container: { w: 60, h: 34 },
    bg: { w: 60, h: 34 },
    thumb: { w: 26, h: 26 },
    bgBorderRadius: "17px",
    thumbBR: "50%",
    icon: { w: 20, h: 20 },
  },
  [ToggleSizes.Small]: {
    container: { w: 60, h: 34 },
    bg: { w: 60, h: 34 },
    thumb: { w: 26, h: 26 },
    bgBorderRadius: "17px",
    thumbBR: "50%",
    icon: { w: 20, h: 20 },
  },
  [ToggleSizes.Medium]: {
    container: { w: 60, h: 34 },
    bg: { w: 60, h: 34 },
    thumb: { w: 26, h: 26 },
    bgBorderRadius: "17px",
    thumbBR: "50%",
    icon: { w: 20, h: 20 },
  },
  [ToggleSizes.Big]: {
    container: { w: 60, h: 34 },
    bg: { w: 60, h: 34 },
    thumb: { w: 26, h: 26 },
    bgBorderRadius: "17px",
    thumbBR: "50%",
    icon: { w: 20, h: 20 },
  },
  [ToggleSizes.Large]: {
    container: { w: 60, h: 34 },
    bg: { w: 60, h: 34 },
    thumb: { w: 26, h: 26 },
    bgBorderRadius: "17px",
    thumbBR: "50%",
    icon: { w: 20, h: 20 },
  },
};
