export enum themeActionTypes {
  TOGGLE_SYSTEM_COLOR_SCHEME = "TOGGLE_SYSTEM_COLOR_SCHEME",
  SET_TOGGLE_SYSTEM_COLOR_SCHEME = "SET_TOGGLE_SYSTEM_COLOR_SCHEME",
}

export type themeStore = {
  systemColorScheme: boolean;
};
