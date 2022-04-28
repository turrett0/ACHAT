export enum themeActionTypes {
  TOGGLE_SYSTEM_COLOR_SCHEME = "TOGGLE_SYSTEM_COLOR_SCHEME",
  SET_TOGGLE_SYSTEM_COLOR_SCHEME = "SET_TOGGLE_SYSTEM_COLOR_SCHEME",
  SET_THEME_COLORS = "SET_THEME_COLORS",
}

export type themeStore = {
  systemColorScheme: boolean;
  themeColors: themeColorsInterface;
};

export interface themeColorsInterface {
  accentColor: string;
  strangerMessageColor: string;
  mineMessageColor: string;
  bgColor: string;
  textColor: string;
}
