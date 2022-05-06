import produce, {Draft} from "immer";
import {appActions} from "./actionCreator";
import {appActionTypes, appStore, connectionStatusInterface} from "./state";
import {
  getLocalStorageUserID,
  getLocalStorageUserName,
  setLocalStorageUserName,
} from "../../api/localStorage/localStorage";

const initialState: appStore = {
  room: null,
  isMenuOpen: false,
  connectionStatus: connectionStatusInterface.CONNECTING,
  userName: getLocalStorageUserName() || "",
  userID: getLocalStorageUserID(),
  isAuth: false,
};

export const appReducer = produce((draft: Draft<any>, action: appActions) => {
  switch (action.type) {
    case appActionTypes.CONTROL_MENU:
      draft.isMenuOpen = action.payload;
      break;
    case appActionTypes.SET_CURRENT_ROOM:
      draft.room = action.payload;
      break;
    case appActionTypes.SET_AUTH:
      draft.isAuth = action.payload;
      break;
    case appActionTypes.SET_USER_NAME:
      draft.userName = action.payload;
      action.payload && setLocalStorageUserName(action.payload);
      break;
  }
}, initialState);
