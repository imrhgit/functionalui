"use client";

import { FontSizes } from "functionalui/types";
import { Themes, type UiContextType } from "./types";
import React, { createContext, useContext, useState } from "react";

/**
 * themes
 * -- accessibility
 * font sizes
 */

const UiContext = createContext<UiContextType>({
  theme: Themes.Default,
  baseFontSize: FontSizes.Size2 || 2,
  handleSetTheme: () => {},
  onSetBaseFontSize: () => {},
});
interface Props {
  children: React.ReactNode;
}
export function ProvideUiContext({ children }: Props) {
  // data
  const value = useSetUi();
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
export const useUiContext = () => {
  return useContext(UiContext);
};

function useSetUi(): UiContextType {
  const [theme, setTheme] = useState(Themes.Default);
  const handleSetTheme = (props: Themes) => {
    setTheme(props);
  };

  const [baseFontSize, setBaseFontSize] = useState(FontSizes.Size2);
  const onSetBaseFontSize = (v: number) => {
    setBaseFontSize((prev) => {
      if (prev + v > 8) {
        return FontSizes.Size8;
      } else if (prev + v < 1) {
        return FontSizes.Size1;
      } else {
        return prev + v;
      }
    });
  };

  return {
    theme,
    baseFontSize,
    handleSetTheme,
    onSetBaseFontSize,
  };
}
