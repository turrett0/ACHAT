import {themeActionTypes, themeColorsInterface, themeStore} from "./state";
import store from "../index";
import {setItemToLocalStorage} from "../../api/localStorage";
import {
  localStorageVars,
  setThemeToLocalStorage,
} from "../../api/localStorage/actions";
import {
  getCurrentSystemAppear,
  getLightModeVersion,
  getDarkModeVersion,
} from "../../theme/index";

interface toggleSystemColorSchemeInterface {
  type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME;
  payload: {
    colorSchemeData: themeStore["systemColorScheme"];
    theme: themeStore["themeColors"];
    darkModeState: themeStore["darkMode"];
  };
}

interface setSystemColorsInterface {
  type: themeActionTypes.SET_THEME_COLORS;
  payload: themeColorsInterface;
}

interface setDarkModeInterface {
  type: themeActionTypes.SET_DARK_MODE;
  payload: themeColorsInterface;
}

export const themeActionsObject = {
  toggleSystemColorScheme: (): toggleSystemColorSchemeInterface => {
    const isDarkMode = getCurrentSystemAppear();
    const currentTheme = store.getState().themeReducer.themeColors;
    const newTheme = isDarkMode
      ? getDarkModeVersion(currentTheme)
      : getLightModeVersion(currentTheme);

    const newSystemColorSchemeState =
      !store.getState().themeReducer.systemColorScheme;

    setItemToLocalStorage(
      localStorageVars.DATA_AUTO_THEME,
      newSystemColorSchemeState
    );
    return {
      type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME,
      payload: {
        colorSchemeData: newSystemColorSchemeState,
        theme: newTheme,
        darkModeState: isDarkMode,
      },
    };
  },
  setThemeColors: (payload: themeColorsInterface): setSystemColorsInterface => {
    setItemToLocalStorage(localStorageVars.THEME, payload);
    return {type: themeActionTypes.SET_THEME_COLORS, payload: payload};
  },
  setDarkMode: (payload?: boolean): setDarkModeInterface => {
    const currentStore = store.getState();
    const darkMode = !store.getState().themeReducer.darkMode;
    const themeColors = currentStore.themeReducer.themeColors;
    if (payload !== undefined) {
      const manualSet = setThemeToLocalStorage(payload, themeColors);
      return {type: themeActionTypes.SET_DARK_MODE, payload: manualSet};
    }
    const autoSet = setThemeToLocalStorage(darkMode, themeColors);
    return {type: themeActionTypes.SET_DARK_MODE, payload: autoSet};
  },
};

export type StyleActions =
  | toggleSystemColorSchemeInterface
  | setSystemColorsInterface
  | setDarkModeInterface;
