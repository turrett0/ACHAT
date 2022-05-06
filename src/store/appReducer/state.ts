export interface appStore {
  room: string | null;
  isMenuOpen: boolean;
  connectionStatus: connectionStatusInterface;
  userName: string | null;
  userID: string;
  isAuth: boolean;
}

export enum connectionStatusInterface {
  CONNECTED = "CONNECTED",
  CONNECTING = "CONNECTING",
  LOST_CONNECTION = "LOST_CONNECTION",
  DISCONNECTED = "DISCONNECTED",
}

export enum appActionTypes {
  SET_CURRENT_ROOM = "SET_CURRENT_ROOM",
  CONTROL_MENU = "CONTROL_MENU",
  SET_USER_NAME = "SET_USER_NAME",
  SET_AUTH = "SET_AUTH",
}
