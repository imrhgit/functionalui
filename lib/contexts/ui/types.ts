import { FontSizes } from "functionalui/types";

export enum Themes {
  Default = 1,
  Light,
  Dark,
}
export const THEME_CLASSES = {
  [Themes.Default]: "athm-def",
  [Themes.Light]: "athm-light",
  [Themes.Dark]: "athm-dark",
};
export const BASE_FONT_SIZE = FontSizes.Size2 || 2

export type UiContextType = {
  theme: Themes;
  baseFontSize: FontSizes;
  handleSetTheme: (p: Themes) => void;
  onSetBaseFontSize: (v: number) => void;
};