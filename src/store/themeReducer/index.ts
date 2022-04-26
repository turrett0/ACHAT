import {themeActionTypes, themeStore} from "./state";
import {produce, Draft} from "immer";
import {StyleActions} from "./actionCreator";

const initialState: themeStore = {
  systemColorScheme: false,
};

export const themeReducer = produce(
  (draft: Draft<themeStore>, action: StyleActions) => {
    switch (action.type) {
      case themeActionTypes.TOGGLE_SYSTEM_COLOR_SCHEME:
        draft.systemColorScheme = !draft.systemColorScheme;
        break;
      default:
        break;
    }
  },
  initialState
);
