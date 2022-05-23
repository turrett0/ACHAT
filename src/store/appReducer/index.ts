import produce, {Draft} from "immer";
import {appActions} from "./actionCreator";
import {appActionTypes, appStore, connectionStatusTypes} from "./state";
import {
  getLocalStorageUserID,
  getLocalStorageUserName,
  setLocalStorageUserName,
} from "../../api/localStorage/actions";

const initialState: appStore = {
  room: null,
  isMenuOpen: false,
  connectionStatus: connectionStatusTypes.CONNECTING,
  userName: getLocalStorageUserName() || "",
  userID: getLocalStorageUserID(),
  isAuth: false,
  isEmitScroll: true,
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
    case appActionTypes.SET_CONNECTION_STATUS:
      draft.connectionStatus = action.payload;
      break;
    case appActionTypes.SET_IS_EMIT_SCROLL:
      draft.isEmitScroll = action.payload;
  }
}, initialState);
