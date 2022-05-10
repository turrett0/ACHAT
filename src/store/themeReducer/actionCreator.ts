import {themeActionTypes, themeColorsInterface, themeStore} from "./state";
import store from "../index";
import {setItemToLocalStorage} from "../../storage";
import {
  localStorageVars,
  setThemeToLocalStorage,
} from "../../api/localStorage/localStorage";

interface toggleSystemColorSchemeInterface {
  type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME;
  payload: themeStore["systemColorScheme"];
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
    const newSystemColorSchemeState =
      !store.getState().themeReducer.systemColorScheme;
    setItemToLocalStorage(
      localStorageVars.DATA_AUTO_THEME,
      newSystemColorSchemeState
    );
    return {
      type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME,
      payload: newSystemColorSchemeState,
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
