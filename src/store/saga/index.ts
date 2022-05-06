import {spawn} from "redux-saga/effects";
import {themeSaga} from "../themeReducer/sagas";

export function* rootSaga() {
  yield spawn(themeSaga);
}
