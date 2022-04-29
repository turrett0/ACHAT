import {themeActionTypes, themeStore} from "./state";
import {produce, Draft} from "immer";
import {StyleActions} from "./actionCreator";
import {defaultLightModeTheme} from "../../GlobalStyles";
import {
  localStorageSystemColorScheme,
  localStorageDarkMode,
  localStorageTheme,
  localStorageVars,
  setThemeToLocalStorage,
} from "../../api/localStorage/localStorage";
import {putMetaStyleTag} from "../../GlobalStyles";

const initialState: themeStore = {
  systemColorScheme: localStorageSystemColorScheme
    ? JSON.parse(localStorageSystemColorScheme)
    : false,
  darkMode: localStorageDarkMode ? JSON.parse(localStorageDarkMode) : false,
  themeColors: localStorageTheme
    ? JSON.parse(localStorageTheme)
    : defaultLightModeTheme,
};

export const themeReducer = produce(
  (draft: Draft<themeStore>, action: StyleActions) => {
    switch (action.type) {
      case themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME:
        draft.systemColorScheme = !draft.systemColorScheme;
        document.body.setAttribute(
          localStorageVars.DATA_AUTO_THEME,
          String(draft.systemColorScheme)
        );
        localStorage.setItem(
          localStorageVars.DATA_AUTO_THEME,
          JSON.stringify(draft.systemColorScheme)
        );

        break;
      case themeActionTypes.SET_THEME_COLORS:
        draft.themeColors = action.payload;
        localStorage.setItem(
          localStorageVars.THEME,
          JSON.stringify(action.payload)
        );
        putMetaStyleTag(action.payload.accentColor);
        break;
      case themeActionTypes.SET_DARK_MODE:
        draft.darkMode = !draft.darkMode;
        localStorage.setItem(
          localStorageVars.DARK_MODE,
          String(draft.darkMode)
        );

        draft.themeColors = setThemeToLocalStorage(
          draft.darkMode,
          draft.themeColors
        );
        break;
      default:
        break;
    }
  },
  initialState
);
