import {themeActionTypes, themeColorsInterface} from "./state";

interface toggleSystemColorSchemeInterface {
  type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME;
}

interface setSystemColorsInterface {
  type: themeActionTypes.SET_THEME_COLORS;
  payload: themeColorsInterface;
}

interface setDarkModeInterface {
  type: themeActionTypes.SET_DARK_MODE;
}

export const themeActionsObject = {
  toggleSystemColorScheme: (): toggleSystemColorSchemeInterface => ({
    type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME,
  }),
  setThemeColors: (
    payload: themeColorsInterface
  ): setSystemColorsInterface => ({
    type: themeActionTypes.SET_THEME_COLORS,
    payload: payload,
  }),
  setDarkMode: (): setDarkModeInterface => ({
    type: themeActionTypes.SET_DARK_MODE,
  }),
};

export type StyleActions =
  | toggleSystemColorSchemeInterface
  | setSystemColorsInterface
  | setDarkModeInterface;
