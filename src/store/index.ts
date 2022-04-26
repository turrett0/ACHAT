import {createStore, combineReducers, applyMiddleware} from "redux";
import {themeReducer} from "./themeReducer";
import {messagesReducer} from "./messagesReducer";
import {messagesStore} from "./messagesReducer/state";
import {themeStore} from "./themeReducer/state";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootSaga} from "./saga";

export interface IRootState {
  themeReducer: themeStore;
  messagesReducer: messagesStore;
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  themeReducer: themeReducer,
  messagesReducer: messagesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
