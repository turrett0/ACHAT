import {put, takeEvery} from "redux-saga/effects";
import {messagesActionsObject} from "../actionCreator";
import {messagesActionTypes} from "../state";

export function* messagesSaga() {
  yield takeEvery(messagesActionTypes.SET_NEW_MESSAGE, setNewMessageToStore);
}
function* setNewMessageToStore() {
  // const {setNewMessage} = messagesActionsObject;
  //   yield put(setNewMessage("test"));
}
