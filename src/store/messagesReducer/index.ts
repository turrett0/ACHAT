import produce, {Draft} from "immer";
import {messagesStore, messagesActionTypes} from "./state";
import {messagesActions} from "./actionCreator";

const initialState: messagesStore = {
  messages: [],
  userID: "",
  users: [],
  userName: localStorage.getItem("userName"),
  room: "",
  isMenuOpen: false,
};

export const messagesReducer = produce(
  (draft: Draft<messagesStore>, action: messagesActions) => {
    switch (action.type) {
      case messagesActionTypes.SET_USER_NAME:
        draft.userName = action.payload;
        break;
      case messagesActionTypes.SET_CURRENT_ROOM:
        draft.room = action.payload;
        break;
      case messagesActionTypes.SET_USERS:
        draft.users = action.payload;
        break;
      case messagesActionTypes.SET_NEW_MESSAGE:
        draft.messages.push(action.payload);
        break;
      case messagesActionTypes.SET_USER_ID:
        draft.userID = action.payload.userID;
        draft.users = action.payload.onlineUsers;
        break;
      case messagesActionTypes.SET_NEW_USER:
        draft.users.push(action.payload);
        break;
      case messagesActionTypes.REMOVE_USER:
        draft.users = draft.users.filter(
          (user) => user.id !== action.payload.id
        );
        break;
      case messagesActionTypes.CLEAR_MESSAGES:
        draft.messages = [];
        break;
      case messagesActionTypes.CONTROL_MENU:
        draft.isMenuOpen = !draft.isMenuOpen;
        break;
      default:
        break;
    }
  },
  initialState
);
