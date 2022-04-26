import {themeActionTypes} from "./state";

interface IToggleSystemColorScheme {
  type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME;
}
interface ISetToggleSystemColorScheme {
  type: themeActionTypes.SET_TOGGLE_SYSTEM_COLOR_SCHEME;
}

export const themeActionsObject = {
  toggleSystemColorScheme: (): IToggleSystemColorScheme => ({
    type: themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME,
  }),
  setToggleSystemColorScheme: (): ISetToggleSystemColorScheme => ({
    type: themeActionTypes.SET_TOGGLE_SYSTEM_COLOR_SCHEME,
  }),
};

export type StyleActions = IToggleSystemColorScheme;

// const Person = {
//   name: "Barbek",
//   surname: "Akzum",
// };

// const keys = Object.keys(Person) as Array<keyof typeof Person>;
