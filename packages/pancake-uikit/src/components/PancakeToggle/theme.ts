import { darkColors, lightColors } from "../../theme/colors";
import { PancakeToggleTheme } from "./types";

export const light: PancakeToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: PancakeToggleTheme = {
  handleBackground: darkColors.backgroundAlt1,
  handleShadow: darkColors.textDisabled,
};
