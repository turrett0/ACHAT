import produce, {Draft} from "immer";
import {messagesStore, messagesActionTypes} from "./state";
import {messagesActions} from "./actionCreator";

const initialState: messagesStore = {
  messages: [],
  socketID: "",
  users: [],
  isPaginationAvailable: false,
  isLoadingMessages: false,
};

export const messagesReducer = produce(
  (draft: Draft<messagesStore>, action: messagesActions) => {
    switch (action.type) {
      case messagesActionTypes.SET_USERS:
        draft.users = action.payload;
        break;
      case messagesActionTypes.SET_NEW_MESSAGE:
        draft.messages.push(action.payload);
        break;
      case messagesActionTypes.LOAD_MORE_MESSAGES:
        draft.messages.unshift(...action.payload.messages);
        draft.isPaginationAvailable = action.payload.nextPagination;
        draft.isLoadingMessages = false;
        break;
      case messagesActionTypes.SET_USER_ID:
        draft.socketID = action.payload.socketID;
        draft.users = action.payload.onlineUsers;
        draft.messages = [
          ...draft.messages,
          ...action.payload.chatHistory.messages,
        ];
        draft.isPaginationAvailable = action.payload.chatHistory.nextPagination;
        draft.isLoadingMessages = false;
        break;
      case messagesActionTypes.SET_NEW_USER:
        draft.users.push(action.payload);
        break;
      case messagesActionTypes.REMOVE_USER:
        draft.users = draft.users.filter(
          (user) => user.userID !== action.payload.userID
        );
        break;
      case messagesActionTypes.CLEAR_MESSAGES:
        draft.messages = [];
        draft.isPaginationAvailable = true;

        break;
      case messagesActionTypes.SET_PAGINATION_AVAILABILITY:
        draft.isPaginationAvailable = action.payload;
        break;
      case messagesActionTypes.SET_IS_MESSAGES_LOADING:
        draft.isLoadingMessages = action.payload;
        break;
      case messagesActionTypes.SET_RANDOM_SESSION:
        draft.users = action.payload.users;
        break;
      default:
        break;
    }
  },
  initialState
);
