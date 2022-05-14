import {
  messageInterface,
  messagesActionTypes,
  messagesStore,
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

export interface clearMessagesInterface {
  type: messagesActionTypes.CLEAR_MESSAGES;
}

export interface loadMoreMessagesInterface {
  type: messagesActionTypes.LOAD_MORE_MESSAGES;
  payload: messageInterface[];
}

export interface setPaginationAvailabilityInterface {
  type: messagesActionTypes.SET_PAGINATION_AVAILABILITY;
  payload: messagesStore["isPaginationAvailable"];
}

export interface setIsLoadingMessagesInterface {
  type: messagesActionTypes.SET_IS_MESSAGES_LOADING;
  payload: messagesStore["isLoadingMessages"];
}

export type messagesActions =
  | setNewMessageInterface
  | userRegistrationInterface
  | setNewUserInterface
  | removeUserInterface
  | setUsersInterface
  | clearMessagesInterface
  | loadMoreMessagesInterface
  | setPaginationAvailabilityInterface
  | setIsLoadingMessagesInterface;

export const messagesActionsObject = {
  setNewMessage: (payload: messageInterface): setNewMessageInterface => ({
    type: messagesActionTypes.SET_NEW_MESSAGE,
    payload,
  }),
  loadMoreMessages: (
    payload: messageInterface[]
  ): loadMoreMessagesInterface => ({
    type: messagesActionTypes.LOAD_MORE_MESSAGES,
    payload,
  }),
  setUsers: (payload: Array<userInterface>): setUsersInterface => ({
    type: messagesActionTypes.SET_USERS,
    payload,
  }),
  userRegistration: (
    payload: userRegistrationData
  ): userRegistrationInterface => ({
    type: messagesActionTypes.SET_USER_ID,
    payload,
  }),
  setNewUser: (payload: userInterface): setNewUserInterface => ({
    type: messagesActionTypes.SET_NEW_USER,
    payload,
  }),
  removeUser: (payload: userInterface): removeUserInterface => ({
    type: messagesActionTypes.REMOVE_USER,
    payload,
  }),

  clearMessages: (): clearMessagesInterface => ({
    type: messagesActionTypes.CLEAR_MESSAGES,
  }),
  setPaginationAvailability: (
    payload: messagesStore["isPaginationAvailable"]
  ): setPaginationAvailabilityInterface => ({
    type: messagesActionTypes.SET_PAGINATION_AVAILABILITY,
    payload,
  }),
  setIsLoadingMessages: (
    payload: messagesStore["isLoadingMessages"]
  ): setIsLoadingMessagesInterface => ({
    type: messagesActionTypes.SET_IS_MESSAGES_LOADING,
    payload,
  }),
};
