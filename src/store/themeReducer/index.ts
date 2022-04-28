import {themeActionTypes, themeColorsInterface, themeStore} from "./state";
import {produce, Draft} from "immer";
import {StyleActions} from "./actionCreator";

let test = localStorage.getItem("theme");

const initialState: themeStore = {
  systemColorScheme: false,
  themeColors: test
    ? JSON.parse(test)
    : {
        accentColor: "rgb(59, 77, 145)",
        strangerMessageColor: "lightgray",
        mineMessageColor: "rgb(59, 77, 145)",
        textColor: "white",
        bgColor: "white",
      },
};

export const themeReducer = produce(
  (draft: Draft<themeStore>, action: StyleActions) => {
    switch (action.type) {
      case themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME:
        draft.systemColorScheme = !draft.systemColorScheme;
        break;
      case themeActionTypes.SET_THEME_COLORS:
        draft.themeColors = action.payload;
        localStorage.setItem("theme", JSON.stringify(action.payload));
        break;
      default:
        break;
    }
  },
  initialState
);
