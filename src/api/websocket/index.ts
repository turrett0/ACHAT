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
  setRandomSession,
} = messagesActionsObject;
const {setConnectionStatus, setIsEmitScroll} = appActionsObject;
export const messageSocket = io("ws://192.168.3.7:6969");

messageSocket.on(socketEvents.CONNECTED, () => {
  store.dispatch(setConnectionStatus(connectionStatusTypes.CONNECTED));

  const appStore = store.getState().appReducer;
  const lastMessageID = store.getState().messagesReducer.messages[0]?.messageID;
  const isAuth = appStore.isAuth;
  const regData = {
    userID: appStore.userID,
    username: appStore.userName,
    room: appStore.room,
  };

  //On reconnect re-registration
  if (isAuth) {
    registrationRequest(regData, true, lastMessageID);
  }
});

messageSocket.on(socketEvents.CONNECT_ERROR, (e) => {
  console.log(e);
  store.dispatch(setConnectionStatus(connectionStatusTypes.CONNECT_ERROR));
});

messageSocket.on(socketEvents.CONNECT_USER, (userData: userInterface) => {
  store.dispatch(setNewUser(userData));
});

messageSocket.on(socketEvents.RECIEVE_MESSAGE, (message: messageInterface) => {
  store.dispatch(setNewMessage(message));
  console.log(message);
});

messageSocket.on(socketEvents.REGISTRATION, (regData: userRegistrationData) => {
  store.dispatch(userRegistration(regData));
  console.log(regData);
});

messageSocket.on(socketEvents.CONNECT_USER, (user: userInterface) => {
  store.dispatch(setNewUser(user));
});

messageSocket.on(socketEvents.LOAD_MORE_MESSAGES, (data: any) => {
  store.dispatch(setIsEmitScroll(false));
  store.dispatch(loadMoreMessages(data));
});

messageSocket.on(
  socketEvents.SET_NEW_RANDOM_SESSION,
  (data: {isRandomSessionReady: boolean}) => {
    store.dispatch(setRandomSession(data));
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
