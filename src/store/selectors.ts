import {IRootState} from ".";
import {appStore} from "./appReducer/state";
import {messagesStore} from "./messagesReducer/state";
import {themeStore} from "./themeReducer/state";

export const selectIsAuth = (state: IRootState): appStore["isAuth"] =>
  state.appReducer.isAuth;

export const selectIsDarkMode = (state: IRootState): themeStore["darkMode"] =>
  state.themeReducer.darkMode;

export const selectIsMenuOpen = (state: IRootState): appStore["isMenuOpen"] =>
  state.appReducer.isMenuOpen;

export const selectIsToggleSystemColorScheme = (
  state: IRootState
): themeStore["systemColorScheme"] => state.themeReducer.systemColorScheme;

export const selectThemeColors = (
  state: IRootState
): themeStore["themeColors"] => state.themeReducer.themeColors;

export const selectNewMessages = (
  state: IRootState
): messagesStore["messages"] => state.messagesReducer.messages;

export const selectUserID = (state: IRootState): appStore["userID"] =>
  state.appReducer.userID;

export const selectAllUsers = (state: IRootState): messagesStore["users"] =>
  state.messagesReducer.users;

export const selectUserName = (state: IRootState): appStore["userName"] =>
  state.appReducer.userName;
export const selectCurrentRoom = (state: IRootState): appStore["room"] =>
  state.appReducer.room;
