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
