import {defaultDarkModeTheme, defaultLightModeTheme} from "../../GlobalStyles";
import {themeColorsInterface} from "../../store/themeReducer/state";
import {v4 as uuid} from "uuid";

export enum localStorageVars {
  THEME = "theme",
  DARK_MODE = "darkMode",
  DATA_AUTO_THEME = "data-autotheme",
  USER_ID = "userID",
  USER_NAME = "userName",
}

export const getLocalStorageUserName = () => {
  const localStorageUserName = localStorage.getItem(localStorageVars.USER_NAME);
  if (localStorageUserName) {
    return localStorageUserName;
  }
};

export const setLocalStorageUserName = (username: string) =>
  localStorage.setItem(localStorageVars.USER_NAME, username);

export const getLocalStorageUserID = () => {
  const localStorageUserID = localStorage.getItem(localStorageVars.USER_ID);
  if (localStorageUserID) return localStorageUserID;
  const newUserId = uuid();
  localStorage.setItem(localStorageVars.USER_ID, JSON.stringify(newUserId));
  return newUserId;
};
export const localStorageTheme = localStorage.getItem(localStorageVars.THEME);
export const localStorageDarkMode = localStorage.getItem(
  localStorageVars.DARK_MODE
);
export const localStorageSystemColorScheme = localStorage.getItem(
  localStorageVars.DATA_AUTO_THEME
);

export const setThemeToLocalStorage = (
  darkMode: boolean,
  themeColors: themeColorsInterface
) => {
  const darkModeVersion = {
    ...defaultDarkModeTheme,
    accentColor: themeColors.accentColor,
    mineMessageColor: themeColors.mineMessageColor,
    strangerMessageColor: themeColors.strangerMessageColor,
  };

  const lightModeVersion = {
    ...defaultLightModeTheme,
    accentColor: themeColors.accentColor,
    mineMessageColor: themeColors.mineMessageColor,
    strangerMessageColor: themeColors.strangerMessageColor,
  };
  localStorage.setItem(localStorageVars.DARK_MODE, JSON.stringify(darkMode));

  if (darkMode) {
    localStorage.setItem(
      localStorageVars.THEME,
      JSON.stringify(darkModeVersion)
    );
    return darkModeVersion;
  } else {
    localStorage.setItem(
      localStorageVars.THEME,
      JSON.stringify(lightModeVersion)
    );
    return lightModeVersion;
  }
};
