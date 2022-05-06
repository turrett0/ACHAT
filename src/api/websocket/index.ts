import io from "socket.io-client";
import {messagesActionsObject} from "../../store/messagesReducer/actionCreator";
import store from "../../store/index";
import {
  messageInterface,
  userInterface,
  userRegistrationData,
} from "../../store/messagesReducer/state";

export enum socketEvents {
  CONNECT_ERROR = "connect_error",
  CONNECT_USER = "connectUser",
  RECIEVE_MESSAGE = "message",
  REGISTRATION = "id",
  NEW_USER_CONNECTION = "newUserConnected",
  USER_DISCONNECT = "disconnectUser",
}

const {setNewMessage, userRegistration, setNewUser, setUsers} =
  messagesActionsObject;

export const messageSocket = io("ws://192.168.3.7:6969");

messageSocket.on(socketEvents.CONNECT_ERROR, () => {
  console.log("Не удалось подключиться к серверу. ");
});

messageSocket.on(socketEvents.CONNECT_USER, (userData: userInterface) => {
  store.dispatch(setNewUser(userData));
});

messageSocket.on(socketEvents.RECIEVE_MESSAGE, (message: messageInterface) => {
  console.log("message new");
  store.dispatch(setNewMessage(message));
});

messageSocket.on(socketEvents.REGISTRATION, (regData: userRegistrationData) => {
  console.log(regData);
  store.dispatch(userRegistration(regData));
});

messageSocket.on(socketEvents.CONNECT_USER, (user: userInterface) => {
  store.dispatch(setNewUser(user));
});

messageSocket.on(
  socketEvents.USER_DISCONNECT,
  (users: Array<userInterface>) => {
    console.log("disconnected", users);

    store.dispatch(setUsers(users));
  }
);
