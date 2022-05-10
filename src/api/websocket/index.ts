import io from "socket.io-client";
import {messagesActionsObject} from "../../store/messagesReducer/actionCreator";
import store from "../../store/index";
import {
  messageInterface,
  userInterface,
  userRegistrationData,
} from "../../store/messagesReducer/state";
import {appActionsObject} from "../../store/appReducer/actionCreator";
import {connectionStatusTypes} from "../../store/appReducer/state";

export enum socketEvents {
  CONNECTED = "connect",
  CONNECT_ERROR = "connect_error",
  CONNECT_USER = "connectUser",
  RECIEVE_MESSAGE = "message",
  REGISTRATION = "id",
  NEW_USER_CONNECTION = "newUserConnected",
  USER_DISCONNECT = "disconnectUser",
  RECONNECT = "reconnect",
}

const {setNewMessage, userRegistration, setNewUser, setUsers} =
  messagesActionsObject;
const {setConnectionStatus} = appActionsObject;
export const messageSocket = io("ws://192.168.3.7:6969");

messageSocket.on(socketEvents.CONNECTED, () => {
  store.dispatch(setConnectionStatus(connectionStatusTypes.CONNECTED));

  const appStore = store.getState().appReducer;
  const isAuth = appStore.isAuth;
  const regData = {
    userID: appStore.userID,
    username: appStore.userName,
    room: appStore.room?.roomID,
  };

  //On reconnect re-registration
  if (isAuth) {
    messageSocket.emit("registerNewUser", regData);
  }
});

messageSocket.on(socketEvents.CONNECT_ERROR, () => {
  store.dispatch(setConnectionStatus(connectionStatusTypes.CONNECT_ERROR));
});

messageSocket.on(socketEvents.CONNECT_USER, (userData: userInterface) => {
  store.dispatch(setNewUser(userData));
});

messageSocket.on(socketEvents.RECIEVE_MESSAGE, (message: messageInterface) => {
  store.dispatch(setNewMessage(message));
});

messageSocket.on(socketEvents.REGISTRATION, (regData: userRegistrationData) => {
  store.dispatch(userRegistration(regData));
});

messageSocket.on(socketEvents.CONNECT_USER, (user: userInterface) => {
  store.dispatch(setNewUser(user));
});

messageSocket.on(socketEvents.RECONNECT, () => {
  // messageSocket.emit;
});

messageSocket.on(
  socketEvents.USER_DISCONNECT,
  (users: Array<userInterface>) => {
    store.dispatch(setUsers(users));
    if (store.getState().appReducer.room?.roomID === "random") {
    }
    // store.dispatch(setConnectionStatus(connectionStatusTypes.DISCONNECTED));
  }
);
