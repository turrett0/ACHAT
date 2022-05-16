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
  LOAD_MORE_MESSAGES = "LOAD_MORE_MESSAGES",
  SET_PAGINATION_AVAILABILITY = "SET_PAGINATION_AVAILABILITY",
  SET_IS_MESSAGES_LOADING = "SET_IS_MESSAGES_LOADING",
  SET_RANDOM_SESSION = "SET_RANDOM_SESSION",
}

export type messageAuthor = "mine" | "stranger" | "system";
export enum messageTypes {
  FILE_MESSAGE = "fileMessage",
  TEXT_MESSAGE = "textMessage",
}

export type controlMenuInterface = boolean;

export interface textMessageInterface {
  type: messageTypes.TEXT_MESSAGE;
  text: string;
}

export interface fileMessageInterface {
  type: messageTypes.FILE_MESSAGE;
  text: string;
  file: Blob;
  fileName: string | null;
  fileType: string | null;
}

export interface messageInterface {
  userData: userInterface;
  messageID: string;
  message: textMessageInterface | fileMessageInterface;
  time: string;
}

export interface userInterface {
  username: string;
  userID: string;
  socketID: string;
}

export type messagesStore = {
  socketID: string;
  users: Array<userInterface>;
  messages: messageInterface[];
  isPaginationAvailable: boolean;
  isLoadingMessages: boolean;
};

export type userRegistrationData = {
  socketID: string;
  onlineUsers: Array<userInterface>;
  chatHistory: {messages: messageInterface[]; nextPagination: boolean};
};
