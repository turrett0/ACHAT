import produce, {Draft} from "immer";
import {messagesStore, messagesActionTypes} from "./state";
import {messagesActions} from "./actionCreator";

const initialState: messagesStore = {
  messages: [],
  socketID: "",
  users: [],
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
      case messagesActionTypes.SET_USER_ID:
        draft.socketID = action.payload.socketID;
        draft.users = action.payload.onlineUsers;
        draft.messages = [...draft.messages, ...action.payload.chatHistory];
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
        break;

      default:
        break;
    }
  },
  initialState
);
