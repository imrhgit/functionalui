import {
  BorderStyles,
  BorderWidths,
  BoxShadows,
  ColorPalettes,
  FontSizes,
  Radiuses,
  Sizings,
  Spacings,
} from "functionalui/types";

export enum ButtonIconPositions {
  Left = 1,
  Right,
}
export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
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
};

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
};

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
};

export const BUTTON_COLORS: { [key: number]: ButtonColorType } = {
  [ButtonColors.Primary5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Primary8,
    background: ColorPalettes.Primary5,
    borderColor: ColorPalettes.Primary6,
  },
  [ButtonColors.Secondary5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Secondary8,
    background: ColorPalettes.Secondary5,
    borderColor: ColorPalettes.Secondary6,
  },
  [ButtonColors.Grey5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Grey8,
    background: ColorPalettes.Grey5,
    borderColor: ColorPalettes.Grey6,
  },
  [ButtonColors.Blue5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Blue8,
    background: ColorPalettes.Blue5,
    borderColor: ColorPalettes.Blue6,
  },
  [ButtonColors.Red5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Red8,
    background: ColorPalettes.Red5,
    borderColor: ColorPalettes.Red6,
  },
  [ButtonColors.Green5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Green8,
    background: ColorPalettes.Green5,
    borderColor: ColorPalettes.Green6,
  },
  [ButtonColors.Yellow5]: {
    text: ColorPalettes.Grey10,
    icon: ColorPalettes.Yellow8,
    background: ColorPalettes.Yellow5,
    borderColor: ColorPalettes.Yellow6,
  },
};

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
  paddingTop: Spacings;
  paddingBottom: Spacings;
  paddingLeft: Spacings;
  paddingRight: Spacings;
  icon: Sizings;
  text: FontSizes;
  borderRadius: Radiuses;
};
export const BUTTON_SIZE: { [key: number]: ButtonSizeType } = {
  [ButtonSizes.Tiny]: {
    paddingTop: Spacings.Size1,
    paddingBottom: Spacings.Size1,
    paddingLeft: Spacings.Size2,
    paddingRight: Spacings.Size2,
    icon: Sizings.Size1,
    text: FontSizes.Size1,
    borderRadius: Radiuses.Size5,
  },
  [ButtonSizes.Smaller]: {
    paddingTop: Spacings.Size2,
    paddingBottom: Spacings.Size2,
    paddingLeft: Spacings.Size3,
    paddingRight: Spacings.Size3,
    icon: Sizings.Size2,
    text: FontSizes.Size2,
    borderRadius: Radiuses.Size6,
  },
  [ButtonSizes.Small]: {
    paddingTop: Spacings.Size3,
    paddingBottom: Spacings.Size3,
    paddingLeft: Spacings.Size4,
    paddingRight: Spacings.Size4,
    icon: Sizings.Size2,
    text: FontSizes.Size3,
    borderRadius: Radiuses.Size7,
  },
  [ButtonSizes.Medium]: {
    paddingTop: Spacings.Size4,
    paddingBottom: Spacings.Size4,
    paddingLeft: Spacings.Size5,
    paddingRight: Spacings.Size5,
    icon: Sizings.Size3,
    text: FontSizes.Size3,
    borderRadius: Radiuses.Size7,
  },
  [ButtonSizes.Big]: {
    paddingTop: Spacings.Size4,
    paddingBottom: Spacings.Size4,
    paddingLeft: Spacings.Size5,
    paddingRight: Spacings.Size5,
    icon: Sizings.Size4,
    text: FontSizes.Size4,
    borderRadius: Radiuses.Size8,
  },
  [ButtonSizes.Large]: {
    paddingTop: Spacings.Size5,
    paddingBottom: Spacings.Size5,
    paddingLeft: Spacings.Size6,
    paddingRight: Spacings.Size6,
    icon: Sizings.Size5,
    text: FontSizes.Size5,
    borderRadius: Radiuses.Size9,
  },
};

export enum ButtonStyles {
  Plain,
  Gray,
  Tinted,
  Outlined,
  Filled,
}
type ButtonStyleType = {
  // bgcolor
  // textcolor
  // iconcolor
  // withborder
  // bgColor: ColorPalettes;   // this should be on color
  // textColor: ColorPalettes; // this should be on color
  // iconColor: ColorPalettes; // this should be on color
  border: {
    borderWidth: BorderWidths;
    // borderColor: ColorPalettes; // this should be on color
    borderStyle: BorderStyles;
  };
};
export const BUTTON_STYLE: { [key: number]: ButtonStyleType } = {
  [ButtonStyles.Plain]: {
    // bgColor: ColorPalettes.Transparent,
    border: {
      borderWidth: BorderWidths.Size0,
      borderStyle: BorderStyles.None,
    },
  },
  [ButtonStyles.Gray]: {
    // bgColor: ColorPalettes.Grey5,
    border: {
      borderWidth: BorderWidths.Size0,
      borderStyle: BorderStyles.None,
    },
  },
  [ButtonStyles.Tinted]: {
    // bgColor: ColorPalettes.Transparent,
    border: {
      borderWidth: BorderWidths.Size0,
      borderStyle: BorderStyles.None,
    },
  },
  [ButtonStyles.Outlined]: {
    // bgColor: ColorPalettes.Transparent,
    border: {
      borderWidth: BorderWidths.Size0,
      borderStyle: BorderStyles.Solid,
    },
  },
  [ButtonStyles.Filled]: {
    // bgColor: ColorPalettes.Transparent,
    border: {
      borderWidth: BorderWidths.Size0,
      borderStyle: BorderStyles.None,
    },
  },
};
