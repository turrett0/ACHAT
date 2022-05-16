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
  payload: {
    messages: messageInterface[];
    nextPagination: messagesStore["isPaginationAvailable"];
  };
}

export interface setPaginationAvailabilityInterface {
  type: messagesActionTypes.SET_PAGINATION_AVAILABILITY;
  payload: messagesStore["isPaginationAvailable"];
}

export interface setIsLoadingMessagesInterface {
  type: messagesActionTypes.SET_IS_MESSAGES_LOADING;
  payload: messagesStore["isLoadingMessages"];
}

export interface setRandomSessionInterface {
  type: messagesActionTypes.SET_RANDOM_SESSION;
  payload: {
    users: userInterface[];
  };
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
  | setIsLoadingMessagesInterface
  | setRandomSessionInterface;

export const messagesActionsObject = {
  setNewMessage: (payload: messageInterface): setNewMessageInterface => ({
    type: messagesActionTypes.SET_NEW_MESSAGE,
    payload,
  }),
  loadMoreMessages: (
    payload: loadMoreMessagesInterface["payload"]
  ): loadMoreMessagesInterface => ({
    type: messagesActionTypes.LOAD_MORE_MESSAGES,
    payload,
  }),
  setUsers: (payload: setUsersInterface["payload"]): setUsersInterface => ({
    type: messagesActionTypes.SET_USERS,
    payload,
  }),
  userRegistration: (
    payload: userRegistrationInterface["payload"]
  ): userRegistrationInterface => ({
    type: messagesActionTypes.SET_USER_ID,
    payload,
  }),
  setNewUser: (
    payload: setNewUserInterface["payload"]
  ): setNewUserInterface => ({
    type: messagesActionTypes.SET_NEW_USER,
    payload,
  }),
  removeUser: (
    payload: removeUserInterface["payload"]
  ): removeUserInterface => ({
    type: messagesActionTypes.REMOVE_USER,
    payload,
  }),

  clearMessages: (): clearMessagesInterface => ({
    type: messagesActionTypes.CLEAR_MESSAGES,
  }),
  setPaginationAvailability: (
    payload: setPaginationAvailabilityInterface["payload"]
  ): setPaginationAvailabilityInterface => ({
    type: messagesActionTypes.SET_PAGINATION_AVAILABILITY,
    payload,
  }),
  setIsLoadingMessages: (
    payload: setIsLoadingMessagesInterface["payload"]
  ): setIsLoadingMessagesInterface => ({
    type: messagesActionTypes.SET_IS_MESSAGES_LOADING,
    payload,
  }),
  setRandomSession: (
    payload: setRandomSessionInterface["payload"]
  ): setRandomSessionInterface => ({
    type: messagesActionTypes.SET_RANDOM_SESSION,
    payload,
  }),
};
