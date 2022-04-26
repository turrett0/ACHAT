import {spawn} from "redux-saga/effects";
import {messagesSaga} from "../messagesReducer/sagas";
import {themeSaga} from "../themeReducer/sagas";

export function* rootSaga() {
  yield spawn([themeSaga, messagesSaga]);
}
