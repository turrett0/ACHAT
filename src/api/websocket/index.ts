import io from "socket.io-client";
import {messagesActionsObject} from "../../store/messagesReducer/actionCreator";
import store from "../../store/index";
import {
  messageInterface,
  userInterface,
  userRegistrationData,
} from "../../store/messagesReducer/state";

const {setNewMessage, userRegistration, setNewUser, setUsers} =
  messagesActionsObject;

export const messageSocket = io("ws://192.168.3.7:6969");

messageSocket.on("connect_error", () => {
  console.log("Не удалось подключиться к серверу. ");
});

messageSocket.on("connectUser", (userData: userInterface) => {
  console.log(userData);
  // store.dispatch(setUserID(userData.id));
  store.dispatch(setNewUser(userData));
});

messageSocket.on("message", (message: messageInterface) => {
  store.dispatch(setNewMessage(message));
});

messageSocket.on("id", (regData: userRegistrationData) => {
  console.log(regData.onlineUsers);
  store.dispatch(userRegistration(regData));
  // store.dispatch(setUsers(allUsers));
});

messageSocket.on("newUserConnected", (user: userInterface) => {
  store.dispatch(setNewUser(user));
});

messageSocket.on("disconnectUser", (users: Array<userInterface>) => {
  console.log("disconnected", users);

  store.dispatch(setUsers(users));
});
