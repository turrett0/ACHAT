import {themeActionTypes, themeColorsInterface} from "./state";

interface toggleSystemColorSchemeInterface {
  type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME;
}
interface setToggleSystemColorSchemeInterface {
  type: themeActionTypes.SET_TOGGLE_SYSTEM_COLOR_SCHEME;
}

interface setSystemColorsInterface {
  type: themeActionTypes.SET_THEME_COLORS;
  payload: themeColorsInterface;
}

export const themeActionsObject = {
  toggleSystemColorScheme: (): toggleSystemColorSchemeInterface => ({
    type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME,
  }),
  setToggleSystemColorScheme: (): setToggleSystemColorSchemeInterface => ({
    type: themeActionTypes.SET_TOGGLE_SYSTEM_COLOR_SCHEME,
  }),
  setThemeColors: (
    payload: themeColorsInterface
  ): setSystemColorsInterface => ({
    type: themeActionTypes.SET_THEME_COLORS,
    payload: payload,
  }),
};

export type StyleActions =
  | toggleSystemColorSchemeInterface
  | setSystemColorsInterface;

// const Person = {
//   name: "Barbek",
//   surname: "Akzum",
// };

// const keys = Object.keys(Person) as Array<keyof typeof Person>;
