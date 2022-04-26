import {
  messageInterface,
  messagesActionTypes,
  userInterface,
  userRegistrationData,
} from "./state";

export interface setNewMessageInterface {
  type: messagesActionTypes.SET_NEW_MESSAGE;
  payload: messageInterface;
}

export interface setUsersInterface {
  type: messagesActionTypes.SET_USERS;
  payload: Array<userInterface>;
}

export interface userRegistrationInterface {
  type: messagesActionTypes.SET_USER_ID;
  payload: userRegistrationData;
}

export interface setNewUserInterface {
  type: messagesActionTypes.SET_NEW_USER;
  payload: userInterface;
}
export interface removeUserInterface {
  type: messagesActionTypes.REMOVE_USER;
  payload: userInterface;
}

export interface setUserNameInterface {
  type: messagesActionTypes.SET_USER_NAME;
  payload: string;
}

export interface setCurrentRoomInterface {
  type: messagesActionTypes.SET_CURRENT_ROOM;
  payload: string;
}

export interface clearMessagesInterface {
  type: messagesActionTypes.CLEAR_MESSAGES;
}

export type messagesActions =
  | setNewMessageInterface
  | userRegistrationInterface
  | setNewUserInterface
  | removeUserInterface
  | setUsersInterface
  | setUserNameInterface
  | setCurrentRoomInterface
  | clearMessagesInterface;

export const messagesActionsObject = {
  setNewMessage: (payload: messageInterface): setNewMessageInterface => {
    return {
      type: messagesActionTypes.SET_NEW_MESSAGE,
      payload: payload,
    };
  },
  setUsers: (payload: Array<userInterface>): setUsersInterface => ({
    type: messagesActionTypes.SET_USERS,
    payload: payload,
  }),
  userRegistration: (
    payload: userRegistrationData
  ): userRegistrationInterface => ({
    type: messagesActionTypes.SET_USER_ID,
    payload: payload,
  }),
  setNewUser: (payload: userInterface): setNewUserInterface => ({
    type: messagesActionTypes.SET_NEW_USER,
    payload: payload,
  }),
  removeUser: (payload: userInterface): removeUserInterface => ({
    type: messagesActionTypes.REMOVE_USER,
    payload: payload,
  }),
  setUserName: (payload: string): setUserNameInterface => ({
    type: messagesActionTypes.SET_USER_NAME,
    payload: payload,
  }),
  setCurrentRoom: (payload: string): setCurrentRoomInterface => ({
    type: messagesActionTypes.SET_CURRENT_ROOM,
    payload: payload,
  }),
  clearMessages: (): clearMessagesInterface => ({
    type: messagesActionTypes.CLEAR_MESSAGES,
  }),
};
