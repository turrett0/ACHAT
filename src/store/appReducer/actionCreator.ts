import {appActionTypes, appStore, connectionStatusTypes} from "./state";

export interface setCurrentRoomInterface {
  type: appActionTypes.SET_CURRENT_ROOM;
  payload: appStore["room"];
}
export interface setCurrentRoomInterface {
  type: appActionTypes.SET_CURRENT_ROOM;
  payload: appStore["room"];
}

export interface controlMenuInterface {
  type: appActionTypes.CONTROL_MENU;
  payload: appStore["isMenuOpen"];
}

export interface setUserNameInterface {
  type: appActionTypes.SET_USER_NAME;
  payload: appStore["userName"];
}

export interface setAuthInterface {
  type: appActionTypes.SET_AUTH;
  payload: appStore["isAuth"];
}

export interface setConnectionStatusInterface {
  type: appActionTypes.SET_CONNECTION_STATUS;
  payload: connectionStatusTypes;
}

export interface setIsEmitScrollInterface {
  type: appActionTypes.SET_IS_EMIT_SCROLL;
  payload: appStore["isEmitScroll"];
}

export type appActions =
  | setCurrentRoomInterface
  | controlMenuInterface
  | setUserNameInterface
  | setAuthInterface
  | setConnectionStatusInterface
  | setIsEmitScrollInterface;

export const appActionsObject = {
  controlMenu: (payload: boolean): controlMenuInterface => ({
    type: appActionTypes.CONTROL_MENU,
    payload,
  }),
  setCurrentRoom: (
    payload: setCurrentRoomInterface["payload"]
  ): setCurrentRoomInterface => ({
    type: appActionTypes.SET_CURRENT_ROOM,
    payload,
  }),
  setUserName: (
    payload: setUserNameInterface["payload"]
  ): setUserNameInterface => ({
    type: appActionTypes.SET_USER_NAME,
    payload,
  }),
  setAuth: (payload: boolean): setAuthInterface => ({
    type: appActionTypes.SET_AUTH,
    payload,
  }),
  setConnectionStatus: (
    payload: connectionStatusTypes
  ): setConnectionStatusInterface => ({
    type: appActionTypes.SET_CONNECTION_STATUS,
    payload,
  }),
  setIsEmitScroll: (
    payload: setIsEmitScrollInterface["payload"]
  ): setIsEmitScrollInterface => ({
    type: appActionTypes.SET_IS_EMIT_SCROLL,
    payload,
  }),
};
