import {takeEvery, put} from "redux-saga/effects";
import {themeActionsObject} from "../actionCreator";
import {themeActionTypes} from "../state";

export function* themeSaga() {
  yield takeEvery(
    themeActionTypes.SET_TOGGLE_SYSTEM_COLOR_SCHEME,
    toggleSystemColorSchemeSaga
  );
}

function* toggleSystemColorSchemeSaga() {
  const {toggleSystemColorScheme} = themeActionsObject;
  //   yield;
  yield put(toggleSystemColorScheme());
}
