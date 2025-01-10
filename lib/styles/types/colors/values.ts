import { ColorPalettes, ColorSets } from "./generics";

export const COLOR_VALUES: { [key: number]: string } = {
  [ColorPalettes.Transparent]: "#00000000", // "#FFFFFF00"
  // grey
  [ColorPalettes.Grey1]: "hsla(209, 25%, 10%, 1)",
  [ColorPalettes.Grey2]: "hsla(209, 25%, 20%, 1)",
  [ColorPalettes.Grey3]: "hsla(209, 25%, 30%, 1)",
  [ColorPalettes.Grey4]: "hsla(209, 25%, 40%, 1)",
  [ColorPalettes.Grey5]: "hsla(209, 25%, 50%, 1)",
  [ColorPalettes.Grey6]: "hsla(209, 25%, 60%, 1)",
  [ColorPalettes.Grey7]: "hsla(209, 25%, 70%, 1)",
  [ColorPalettes.Grey8]: "hsla(209, 25%, 80%, 1)",
  [ColorPalettes.Grey9]: "hsla(209, 25%, 90%, 1)",
  [ColorPalettes.Grey10]: "hsla(209, 25%, 99%, 1)",
  // primary
  [ColorPalettes.Primary1]: "hsla(209, 100%, 9%, 1)",
  [ColorPalettes.Primary2]: "hsla(209, 100%, 19%, 1)",
  [ColorPalettes.Primary3]: "hsla(209, 100%, 29%, 1)",
  [ColorPalettes.Primary4]: "hsla(209, 100%, 39%, 1)",
  [ColorPalettes.Primary5]: "hsla(209, 100%, 49%, 1)",
  [ColorPalettes.Primary6]: "hsla(209, 100%, 59%, 1)",
  [ColorPalettes.Primary7]: "hsla(209, 100%, 69%, 1)",
  [ColorPalettes.Primary8]: "hsla(209, 100%, 79%, 1)",
  [ColorPalettes.Primary9]: "hsla(209, 100%, 89%, 1)",
  // secondary
  [ColorPalettes.Secondary1]: "hsla(28, 100%, 9%, 1)",
  [ColorPalettes.Secondary2]: "hsla(28, 100%, 19%, 1)",
  [ColorPalettes.Secondary3]: "hsla(28, 100%, 29%, 1)",
  [ColorPalettes.Secondary4]: "hsla(28, 100%, 39%, 1)",
  [ColorPalettes.Secondary5]: "hsla(28, 100%, 49%, 1)",
  [ColorPalettes.Secondary6]: "hsla(28, 100%, 59%, 1)",
  [ColorPalettes.Secondary7]: "hsla(28, 100%, 69%, 1)",
  [ColorPalettes.Secondary8]: "hsla(28, 100%, 79%, 1)",
  [ColorPalettes.Secondary9]: "hsla(28, 100%, 89%, 1)",
  // r g b y o
  [ColorPalettes.Red1]: "hsla(12, 100%, 10%, 1)",
  [ColorPalettes.Red2]: "hsla(12, 100%, 20%, 1)",
  [ColorPalettes.Red3]: "hsla(12, 100%, 30%, 1)",
  [ColorPalettes.Red4]: "hsla(12, 100%, 40%, 1)",
  [ColorPalettes.Red5]: "hsla(12, 100%, 50%, 1)",
  [ColorPalettes.Red6]: "hsla(12, 100%, 60%, 1)",
  [ColorPalettes.Red7]: "hsla(12, 100%, 70%, 1)",
  [ColorPalettes.Red8]: "hsla(12, 100%, 80%, 1)",
  [ColorPalettes.Red9]: "hsla(12, 100%, 90%, 1)",
  [ColorPalettes.Green1]: "hsla(123, 50%, 10%, 1)",
  [ColorPalettes.Green2]: "hsla(123, 50%, 20%, 1)",
  [ColorPalettes.Green3]: "hsla(123, 50%, 30%, 1)",
  [ColorPalettes.Green4]: "hsla(123, 50%, 40%, 1)",
  [ColorPalettes.Green5]: "hsla(123, 50%, 50%, 1)",
  [ColorPalettes.Green6]: "hsla(123, 50%, 60%, 1)",
  [ColorPalettes.Green7]: "hsla(123, 50%, 70%, 1)",
  [ColorPalettes.Green8]: "hsla(123, 50%, 80%, 1)",
  [ColorPalettes.Green9]: "hsla(123, 50%, 90%, 1)",
  [ColorPalettes.Blue1]: "hsla(205, 100%, 10%, 1)",
  [ColorPalettes.Blue2]: "hsla(205, 100%, 20%, 1)",
  [ColorPalettes.Blue3]: "hsla(205, 100%, 30%, 1)",
  [ColorPalettes.Blue4]: "hsla(205, 100%, 40%, 1)",
  [ColorPalettes.Blue5]: "hsla(205, 100%, 50%, 1)",
  [ColorPalettes.Blue6]: "hsla(205, 100%, 60%, 1)",
  [ColorPalettes.Blue7]: "hsla(205, 100%, 70%, 1)",
  [ColorPalettes.Blue8]: "hsla(205, 100%, 80%, 1)",
  [ColorPalettes.Blue9]: "hsla(205, 100%, 90%, 1)",
  [ColorPalettes.Yellow1]: "hsla(42, 100%, 10%, 1)",
  [ColorPalettes.Yellow2]: "hsla(42, 100%, 20%, 1)",
  [ColorPalettes.Yellow3]: "hsla(42, 100%, 30%, 1)",
  [ColorPalettes.Yellow4]: "hsla(42, 100%, 40%, 1)",
  [ColorPalettes.Yellow5]: "hsla(42, 100%, 50%, 1)",
  [ColorPalettes.Yellow6]: "hsla(42, 100%, 60%, 1)",
  [ColorPalettes.Yellow7]: "hsla(42, 100%, 70%, 1)",
  [ColorPalettes.Yellow8]: "hsla(42, 100%, 80%, 1)",
  [ColorPalettes.Yellow9]: "hsla(42, 100%, 90%, 1)",
};

export const ColorRanges = {
  [ColorSets.Transparents]: [0, 1],
  [ColorSets.Greys]: [2, 11],
  [ColorSets.Primarys]: [12, 20],
  [ColorSets.Secondarys]: [21, 29],
  [ColorSets.Reds]: [30, 38],
  [ColorSets.Greens]: [39, 47],
  [ColorSets.Blues]: [48, 56],
  [ColorSets.Yellows]: [57, 65],
  [ColorSets.Accents1]: [66, 74],
  [ColorSets.Accents2]: [75, 83],
};

export enum ColorRGBAAlphas {
  Opaque = 1, // max, max
  Dark3 = 2,
  Dark2 = 3,
  Dark1 = 4,
  Light1 = 5,
  Light2 = 6,
  Light3 = 7,
  Transparent = 8, //min, min
}
export const COLOR_RGBA_ALPHA = {
  /**
   * 6 (a-f (f is darker)) + 10 (0-9 (9 is darker)) | same concept (starts with 0 end with f)
   * 18 | 18
   * 18 / 2 = 9   | 2, 4, 6, 8 | 10 | 12, 14, 16, 18
   * 0 2 4 6 8 a c e(f)
   */
  [ColorRGBAAlphas.Opaque]: "ff", // e(f)
  [ColorRGBAAlphas.Dark3]: "c0", // c
  [ColorRGBAAlphas.Dark2]: "a0", // a
  [ColorRGBAAlphas.Dark1]: "80", // 8
  [ColorRGBAAlphas.Light1]: "60", // 6
  [ColorRGBAAlphas.Light2]: "40", // 4
  [ColorRGBAAlphas.Light3]: "20", // 2
  [ColorRGBAAlphas.Transparent]: "00", // 0
};
