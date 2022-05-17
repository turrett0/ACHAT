import {appStore} from "../../store/appReducer/state";

export enum socketEvents {
  CONNECTED = "connect",
  CONNECT_ERROR = "connect_error",
  CONNECT_USER = "connectUser",
  RECIEVE_MESSAGE = "message",
  REGISTRATION = "id",
  NEW_USER_CONNECTION = "newUserConnected",
  USER_DISCONNECT = "disconnectUser",
  LOAD_MORE_MESSAGES = "loadMoreMessages",
  SET_NEW_RANDOM_SESSION = "setNewRandomSession",
}

export enum socketActions {
  REGISTRATION = "registerNewUser",
  DISCONNECT_SESSION = "disconnectSession",
  SEND_MESSAGE = "chatMessage",
  REQUEST_MORE_MESSAGES = "requestMoreMessages",
}

export interface socketRegistrationData {
  username: appStore["userName"];
  room: appStore["room"];
  userID: appStore["userID"];
}

export interface paginationData {
  lastMessageID: string;
  require: number;
  room: string;
}
