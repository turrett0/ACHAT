import {IRootState} from ".";
import {messagesStore} from "./messagesReducer/state";
import {themeStore} from "./themeReducer/state";

export const selectIsToggleSystemColorScheme = (
  state: IRootState
): themeStore["systemColorScheme"] => state.themeReducer.systemColorScheme;

export const selectNewMessages = (
  state: IRootState
): messagesStore["messages"] => state.messagesReducer.messages;

export const selectUserID = (state: IRootState): messagesStore["userID"] =>
  state.messagesReducer.userID;

export const selectAllUsers = (state: IRootState): messagesStore["users"] =>
  state.messagesReducer.users;

export const selectUserName = (state: IRootState): messagesStore["userName"] =>
  state.messagesReducer.userName;
export const selectCurrentRoom = (state: IRootState): messagesStore["room"] =>
  state.messagesReducer.room;
