import { BoxShadows, ColorPalettes, FontSizes, Radiuses, Sizings } from "functionalui/types"

export enum ButtonIconPositions {
  Left = 1,
  Right,
}
export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
}
// export enum ButtonIconStates {
//   Icon = 1,
//   Loading,
//   Success,
//   Error,
//   Disabled,
// }
export enum ButtonShadows {
  Size1 = 1,
  Size2,
  Size3,
  Size4,
  Size5,
}
export const BUTTON_SHADOWS_CLASSES = {
  [BoxShadows.Size0]: "fctrd--cboxs-0",
  [BoxShadows.Size1]: "fctrd--cboxs-1",
  [BoxShadows.Size2]: "fctrd--cboxs-2",
  [BoxShadows.Size3]: "fctrd--cboxs-3",
  [BoxShadows.Size4]: "fctrd--cboxs-4",
  [BoxShadows.Size5]: "fctrd--cboxs-5",
  [BoxShadows.Size6]: "fctrd--cboxs-6",
}

export enum ButtonStates {
  Icon = 1,
  Loading,
  Success,
  Error,
  Disabled,
}
export const ButtonStateIcon = {
  [ButtonStates.Loading]: "spinner",
  [ButtonStates.Success]: "check",
  [ButtonStates.Error]: "x",
  [ButtonStates.Disabled]: "minus-circle",
}

// export const ButtonIconState = {
//   [ButtonStates.Icon]: icon,
// }
// type FnParams = {
//   icon?: string;
//   iconSize?: IconSizings;
//   iconColor?: IconColors;
// }
// type FnRet = {
//   reactIcon?: React.ReactNode;
// }
// function icon({ icon = "info", iconSize, iconColor, }: FnParams): FnRet {
//   return {
//     reactIcon: <React__Icons name={icon} color={iconColor} size={iconSize} />
//   }
// }
// function loading({ icon = "info", iconSize, iconColor, }: FnParams): FnRet {
//   return {
//     reactIcon: <React__Icons name={icon} color={iconColor} size={iconSize} />
//   }
// }



export enum ButtonColors {
  Primary5 = 1,
  Secondary5,
  Grey5,
  Blue5,
  Green5,
  Red5,
  Yellow5,
  OutlinePrimary5,
  OutlineSecondary5,
  OutlineGrey5,
  OutlineBlue5,
  OutlineGreen5,
  OutlineRed5,
  OutlineYellow5,
}
type ButtonColorType = {
  // text color, icon, button, bgcolor, shadow, hovercolor(bgcolor)
  text: ColorPalettes;
  icon: ColorPalettes;
  background: ColorPalettes;
  
  outline?: ColorPalettes;
  shadow?: ColorPalettes;
  hover?: ColorPalettes; // what to color ? border / bg / 
  borderColor: ColorPalettes;
}

export const BUTTON_COLORS: { [key: number]: ButtonColorType } = {
  [ButtonColors.Primary5]: {
    text: ColorPalettes.Primary9,
    icon: ColorPalettes.Primary8,
    background: ColorPalettes.Primary5,
    borderColor: ColorPalettes.Primary6,
  },
  [ButtonColors.Secondary5]: {
    text: ColorPalettes.Secondary9,
    icon: ColorPalettes.Secondary8,
    background: ColorPalettes.Secondary5,
    borderColor: ColorPalettes.Secondary6,
  },
  [ButtonColors.Grey5]: {
    text: ColorPalettes.Grey9,
    icon: ColorPalettes.Grey8,
    background: ColorPalettes.Grey5,
    borderColor: ColorPalettes.Grey6,
  },
  [ButtonColors.Blue5]: {
    text: ColorPalettes.Blue9,
    icon: ColorPalettes.Blue8,
    background: ColorPalettes.Blue5,
    borderColor: ColorPalettes.Blue6,
  },
  [ButtonColors.Red5]: {
    text: ColorPalettes.Red9,
    icon: ColorPalettes.Red8,
    background: ColorPalettes.Red5,
    borderColor: ColorPalettes.Red6,
  },
  [ButtonColors.Green5]: {
    text: ColorPalettes.Green9,
    icon: ColorPalettes.Green8,
    background: ColorPalettes.Green5,
    borderColor: ColorPalettes.Green6,
  },
  [ButtonColors.Yellow5]: {
    text: ColorPalettes.Yellow9,
    icon: ColorPalettes.Yellow8,
    background: ColorPalettes.Yellow5,
    borderColor: ColorPalettes.Yellow6,
  },
}


export enum ButtonSizes {
  Tiny = 1,
  Smaller,
  Small,
  Medium,
  Big,
  Large,
}
type ButtonSizeType = {
  // paddings, icon, text
  paddingTop: Sizings;
  paddingBottom: Sizings;
  paddingLeft: Sizings;
  paddingRight: Sizings;
  icon: Sizings;
  text: FontSizes;
  borderRadius: Radiuses;
}
export const BUTTON_SIZE: { [key: number]: ButtonSizeType } = {
  [ButtonSizes.Tiny]: {
    paddingTop: Sizings.Size1,
    paddingBottom: Sizings.Size1,
    paddingLeft: Sizings.Size1,
    paddingRight: Sizings.Size1,
    icon: Sizings.Size1,
    text: FontSizes.Size1,
    borderRadius: Radiuses.Size3,
  },
  [ButtonSizes.Smaller]: {
    paddingTop: Sizings.Size2,
    paddingBottom: Sizings.Size2,
    paddingLeft: Sizings.Size2,
    paddingRight: Sizings.Size2,
    icon: Sizings.Size2,
    text: FontSizes.Size2,
    borderRadius: Radiuses.Size3,
  },
  [ButtonSizes.Small]: {
    paddingTop: Sizings.Size3,
    paddingBottom: Sizings.Size3,
    paddingLeft: Sizings.Size3,
    paddingRight: Sizings.Size3,
    icon: Sizings.Size2,
    text: FontSizes.Size3,
    borderRadius: Radiuses.Size5,
  },
  [ButtonSizes.Medium]: {
    paddingTop: Sizings.Size4,
    paddingBottom: Sizings.Size4,
    paddingLeft: Sizings.Size4,
    paddingRight: Sizings.Size4,
    icon: Sizings.Size3,
    text: FontSizes.Size3,
    borderRadius: Radiuses.Size5,
  },
  [ButtonSizes.Big]: {
    paddingTop: Sizings.Size2,
    paddingBottom: Sizings.Size2,
    paddingLeft: Sizings.Size3,
    paddingRight: Sizings.Size3,
    icon: Sizings.Size4,
    text: FontSizes.Size4,
    borderRadius: Radiuses.Size6,
  },
  [ButtonSizes.Large]: {
    paddingTop: Sizings.Size2,
    paddingBottom: Sizings.Size2,
    paddingLeft: Sizings.Size3,
    paddingRight: Sizings.Size3,
    icon: Sizings.Size5,
    text: FontSizes.Size5,
    borderRadius: Radiuses.Size6,
  },
}