export enum messagesActionTypes {
  SET_NEW_MESSAGE = "SET_NEW_MESSAGE",
  SET_USERS = "SET_USERS",
  SET_USER_ID = "SET_USER_ID",
  SET_NEW_USER = "SET_NEW_USER",
  REMOVE_USER = "REMOVE_USER",
  SET_USER_NAME = "SET_USER_NAME",
  SET_CURRENT_ROOM = "SET_CURRENT_ROOM",
  CLEAR_MESSAGES = "CLEAR_MESSAGES",
  CONTROL_MENU = "CONTROL_MENU",
}

export type MessageType = "mine" | "stranger" | "system";

export type controlMenuInterface = boolean;

export interface messageInterface {
  userData: userInterface;
  body: string;
  time: string;
}

export interface userInterface {
  username: string;
  id: string;
  color: string;
}

export type messagesStore = {
  room: string | null;
  userID: string;
  userName: string | null;
  isMenuOpen: boolean;
  users: Array<userInterface>;
  messages: messageInterface[];
};

export type userRegistrationData = {
  userID: string;
  onlineUsers: Array<userInterface>;
};
