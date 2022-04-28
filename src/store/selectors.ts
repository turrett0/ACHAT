import {IRootState} from ".";
import {messagesStore} from "./messagesReducer/state";
import {themeStore} from "./themeReducer/state";

export const selectIsDarkMode = (state: IRootState): themeStore["darkMode"] =>
  state.themeReducer.darkMode;

export const selectIsMenuOpen = (
  state: IRootState
): messagesStore["isMenuOpen"] => state.messagesReducer.isMenuOpen;

export const selectIsToggleSystemColorScheme = (
  state: IRootState
): themeStore["systemColorScheme"] => state.themeReducer.systemColorScheme;

export const selectThemeColors = (
  state: IRootState
): themeStore["themeColors"] => state.themeReducer.themeColors;

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
