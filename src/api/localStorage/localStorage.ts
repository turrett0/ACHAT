import {defaultDarkModeTheme, defaultLightModeTheme} from "../../GlobalStyles";
import {themeColorsInterface} from "../../store/themeReducer/state";

export enum localStorageVars {
  THEME = "theme",
  DARK_MODE = "darkMode",
  DATA_AUTO_THEME = "data-autotheme",
}

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

  console.log(darkModeVersion);

  const lightModeVersion = {
    ...defaultLightModeTheme,
    accentColor: themeColors.accentColor,
    mineMessageColor: themeColors.mineMessageColor,
    strangerMessageColor: themeColors.strangerMessageColor,
  };

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
