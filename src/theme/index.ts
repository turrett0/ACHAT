import {themeColorsInterface} from "../store/themeReducer/state";

export const getDarkModeVersion = (
  themeColors: themeColorsInterface
): themeColorsInterface => ({
  ...defaultDarkModeTheme,
  accentColor: themeColors.accentColor,
  mineMessageColor: themeColors.mineMessageColor,
  strangerMessageColor: themeColors.strangerMessageColor,
});

export const getLightModeVersion = (
  themeColors: themeColorsInterface
): themeColorsInterface => ({
  ...defaultLightModeTheme,
  accentColor: themeColors.accentColor,
  mineMessageColor: themeColors.mineMessageColor,
  strangerMessageColor: themeColors.strangerMessageColor,
});

export const getCurrentSystemAppear = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const defaultLightModeTheme = {
  accentColor: "rgb(59, 77, 145)",
  strangerMessageColor: "lightgray",
  mineMessageColor: "rgb(59, 77, 145)",
  textColor: "white",
  reversedTextColor: "black",
  bgColor: "white",
};

export const defaultDarkModeTheme = {
  accentColor: "rgb(59, 77, 145)",
  strangerMessageColor: "lightgray",
  mineMessageColor: "rgb(59, 77, 145)",
  textColor: "white",
  reversedTextColor: "white",
  bgColor: "rgb(29,30,32)",
};

export const defaultBlockPickerColors: string[] = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#607d8b",
  "#1d1e20",
];

export const defaultTwitterPickerColors: string[] = [
  "#3B4D91",
  "#FF6900",
  "#FCB900",
  "#7BDCB5",
  "#00D084",
  "#8ED1FC",
  "#ABB8C3",
  "#EB144C",
  "#F78DA7",
  "#9900EF",
];
