import {createStore, combineReducers} from "redux";
import {themeReducer} from "./themeReducer";
import {messagesReducer} from "./messagesReducer";
import {messagesStore} from "./messagesReducer/state";
import {themeStore} from "./themeReducer/state";
import {composeWithDevTools} from "redux-devtools-extension";
import {appStore} from "./appReducer/state";
import {appReducer} from "./appReducer";

export interface IRootState {
  themeReducer: themeStore;
  messagesReducer: messagesStore;
  appReducer: appStore;
}

const rootReducer = combineReducers({
  themeReducer: themeReducer,
  messagesReducer: messagesReducer,
  appReducer: appReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export const test = store;

export default store;
