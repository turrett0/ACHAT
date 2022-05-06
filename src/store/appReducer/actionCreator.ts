import {appActionTypes, appStore} from "./state";

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

export type appActions =
  | setCurrentRoomInterface
  | controlMenuInterface
  | setUserNameInterface
  | setAuthInterface;

export const appActionsObject = {
  controlMenu: (payload: boolean): controlMenuInterface => ({
    type: appActionTypes.CONTROL_MENU,
    payload: payload,
  }),
  setCurrentRoom: (
    payload: setCurrentRoomInterface["payload"]
  ): setCurrentRoomInterface => ({
    type: appActionTypes.SET_CURRENT_ROOM,
    payload: payload,
  }),
  setUserName: (
    payload: setUserNameInterface["payload"]
  ): setUserNameInterface => ({
    type: appActionTypes.SET_USER_NAME,
    payload: payload,
  }),
  setAuth: (payload: boolean): setAuthInterface => ({
    type: appActionTypes.SET_AUTH,
    payload: payload,
  }),
};