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
import {socketEvents} from "./state";
import {registrationRequest} from "./actions";

const {
  setNewMessage,
  userRegistration,
  setNewUser,
  setUsers,
  loadMoreMessages,
  setPaginationAvailability,
} = messagesActionsObject;
const {setConnectionStatus} = appActionsObject;
export const messageSocket = io("ws://192.168.3.7:6969");

messageSocket.on(socketEvents.CONNECTED, () => {
  store.dispatch(setConnectionStatus(connectionStatusTypes.CONNECTED));

  const appStore = store.getState().appReducer;
  const isAuth = appStore.isAuth;
  const regData = {
    userID: appStore.userID,
    username: appStore.userName,
    room: appStore.room,
  };

  //On reconnect re-registration
  if (isAuth) {
    registrationRequest(regData, true);
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

messageSocket.on(
  socketEvents.LOAD_MORE_MESSAGES,
  (data: messageInterface[]) => {
    console.log(data);
    if (data.length > 0) {
      store.dispatch(loadMoreMessages(data));
    } else {
      store.dispatch(setPaginationAvailability(false));
    }
  }
);

messageSocket.on(
  socketEvents.USER_DISCONNECT,
  (users: Array<userInterface>) => {
    store.dispatch(setUsers(users));
    if (store.getState().appReducer.room?.roomID === "random") {
    }
  }
);
