import {getDarkModeVersion, getLightModeVersion} from "../../theme/index";
import {themeColorsInterface} from "../../store/themeReducer/state";
import {v4 as uuid} from "uuid";
import {getItemFromLocalStorage, setItemToLocalStorage} from ".";

export enum localStorageVars {
  THEME = "theme",
  DARK_MODE = "darkMode",
  DATA_AUTO_THEME = "data-autotheme",
  USER_ID = "userID",
  USER_NAME = "userName",
}

export const getLocalStorageUserName = () => {
  try {
    const localStorageUserName = getItemFromLocalStorage(
      localStorageVars.USER_NAME
    );
    if (localStorageUserName) {
      return localStorageUserName;
    }
  } catch (error) {
    return "";
  }
};

export const setLocalStorageUserName = (username: string) =>
  setItemToLocalStorage(localStorageVars.USER_NAME, username);

export const getLocalStorageUserID = () => {
  const localStorageUserID = getItemFromLocalStorage(localStorageVars.USER_ID);
  if (localStorageUserID) return localStorageUserID;
  const newUserId = uuid();
  setItemToLocalStorage(localStorageVars.USER_ID, JSON.stringify(newUserId));
  return newUserId;
};
export const getlocalStorageTheme = getItemFromLocalStorage(
  localStorageVars.THEME
);
export const getlocalStorageDarkMode = getItemFromLocalStorage(
  localStorageVars.DARK_MODE
);
export const getlocalStorageSystemColorScheme = getItemFromLocalStorage(
  localStorageVars.DATA_AUTO_THEME
);

export const setThemeToLocalStorage = (
  darkMode: boolean,
  themeColors: themeColorsInterface
) => {
  setItemToLocalStorage(localStorageVars.DARK_MODE, darkMode);

  if (darkMode) {
    setItemToLocalStorage(
      localStorageVars.THEME,
      getDarkModeVersion(themeColors)
    );
    return getDarkModeVersion(themeColors);
  } else {
    setItemToLocalStorage(
      localStorageVars.THEME,
      getLightModeVersion(themeColors)
    );
    return getLightModeVersion(themeColors);
  }
};
