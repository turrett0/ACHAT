export enum messagesActionTypes {
  SET_NEW_MESSAGE = "SET_NEW_MESSAGE",
  SET_USERS = "SET_USERS",
  SET_USER_ID = "SET_USER_ID",
  SET_NEW_USER = "SET_NEW_USER",
  REMOVE_USER = "REMOVE_USER",
  SET_USER_NAME = "SET_USER_NAME",
  SET_CURRENT_ROOM = "SET_CURRENT_ROOM",
  CLEAR_MESSAGES = "CLEAR_MESSAGES",
}

export type MessageType = "mine" | "stranger" | "system";

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
  room: string;
  messages: messageInterface[];
  userID: string;
  userName: string | null;
  users: Array<userInterface>;
};

export type userRegistrationData = {
  userID: string;
  onlineUsers: Array<userInterface>;
};
