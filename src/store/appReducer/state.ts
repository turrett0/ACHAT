export interface appStore {
  room: {
    roomID: string;
    roomName: string;
  } | null;
  isMenuOpen: boolean;
  connectionStatus: connectionStatusTypes;
  userName: string | null;
  userID: string;
  isAuth: boolean;
}

export enum connectionStatusTypes {
  CONNECTED = "CONNECTED",
  CONNECTING = "CONNECTING",
  LOST_CONNECTION = "LOST_CONNECTION",
  DISCONNECTED = "DISCONNECTED",
  CONNECT_ERROR = "CONNECT_ERROR",
}

export enum appActionTypes {
  SET_CURRENT_ROOM = "SET_CURRENT_ROOM",
  CONTROL_MENU = "CONTROL_MENU",
  SET_USER_NAME = "SET_USER_NAME",
  SET_AUTH = "SET_AUTH",
  SET_CONNECTION_STATUS = "SET_CONNECTION_STATUS ",
}
