import { Radiuses } from "functionalui/types"

export enum CheckboxColors {
  Primary5 = 1,
  Secondary5,
  Grey5,
  Red5,
  Green5,
  Blue5,
  Yellow5,
}
export enum CheckboxSizes {
  Size1 = 1,
  Size2,
  Size3,
  Size4,
  Size5,
}
const CheckboxPadding = {
  [CheckboxSizes.Size1]: 2,
  [CheckboxSizes.Size2]: 2,
  [CheckboxSizes.Size3]: 3,
  [CheckboxSizes.Size4]: 3,
  [CheckboxSizes.Size5]: 4,
}
export const CHECKBOX_SIZES = {
  // the container size, border size, padding size, the checkedcolor sizes
  [CheckboxSizes.Size1]: {
    checkedColor: { w: 8, h: 8 },
    checkedBorderRadius: Radiuses.Size1,
    boxBorderRadius: Radiuses.Size2,
    padding: CheckboxPadding[CheckboxSizes.Size1],
    borderWidth: "1px",
  },
  [CheckboxSizes.Size2]: {
    checkedColor: { w: 12, h: 12 },
    checkedBorderRadius: Radiuses.Size1,
    boxBorderRadius: Radiuses.Size6,
    padding: CheckboxPadding[CheckboxSizes.Size2],
    borderWidth: "1px",
  },
  [CheckboxSizes.Size3]: {
    checkedColor: { w: 16, h: 16 },
    checkedBorderRadius: Radiuses.Size2,
    boxBorderRadius: Radiuses.Size3,
    padding: CheckboxPadding[CheckboxSizes.Size3],
    borderWidth: "1px",
  },
  [CheckboxSizes.Size4]: {
    checkedColor: { w: 20, h: 20 },
    checkedBorderRadius: Radiuses.Size3,
    boxBorderRadius: Radiuses.Size4,
    padding: CheckboxPadding[CheckboxSizes.Size4],
    borderWidth: "2px",
  },
  [CheckboxSizes.Size5]: {
    checkedColor: { w: 24, h: 24 },
    checkedBorderRadius: Radiuses.Size5,
    boxBorderRadius: Radiuses.Size4,
    padding: CheckboxPadding[CheckboxSizes.Size5],
    borderWidth: "2px",
  },
}
export const CHECKBOX_COLORS = {
  // border color, the checkedcolor
  [CheckboxColors.Primary5]: { borderColor: "#A1662F", checkedColor: "#A1662F", },
  [CheckboxColors.Secondary5]: { borderColor: "#30b197", checkedColor: "#30b197", },
  [CheckboxColors.Grey5]: { borderColor: "#adb5bd", checkedColor: "#adb5bd", },
  [CheckboxColors.Red5]: { borderColor: "#e45b5b", checkedColor: "#e45b5b", },
  [CheckboxColors.Green5]: { borderColor: "#70cfc6", checkedColor: "#70cfc6", },
  [CheckboxColors.Blue5]: { borderColor: "#2f83c6", checkedColor: "#2f83c6", },
  [CheckboxColors.Yellow5]: { borderColor: "#f2c04d", checkedColor: "#f2c04d", },
}