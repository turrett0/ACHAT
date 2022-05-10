import {themeActionTypes, themeStore} from "./state";
import {produce, Draft} from "immer";
import {StyleActions} from "./actionCreator";
import {defaultLightModeTheme} from "../../theme/index";
import {
  getlocalStorageSystemColorScheme,
  getlocalStorageDarkMode,
  getlocalStorageTheme,
} from "../../api/localStorage/localStorage";

const initialState: themeStore = {
  systemColorScheme: getlocalStorageSystemColorScheme
    ? JSON.parse(getlocalStorageSystemColorScheme)
    : true,
  darkMode: getlocalStorageDarkMode
    ? JSON.parse(getlocalStorageDarkMode)
    : true,
  themeColors: getlocalStorageTheme
    ? JSON.parse(getlocalStorageTheme)
    : defaultLightModeTheme,
};

export const themeReducer = produce(
  (draft: Draft<themeStore>, action: StyleActions) => {
    switch (action.type) {
      case themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME:
        draft.systemColorScheme = action.payload;
        break;
      case themeActionTypes.SET_THEME_COLORS:
        draft.themeColors = action.payload;
        break;
      case themeActionTypes.SET_DARK_MODE:
        draft.darkMode = !draft.darkMode;
        draft.themeColors = action.payload;
        break;
      default:
        break;
    }
  },
  initialState
);
