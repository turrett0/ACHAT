import {messageSocket} from "./index";
import {messageInterface} from "../../store/messagesReducer/state";
import {paginationData, socketActions, socketRegistrationData} from "./state";

export function registrationRequest(
  userData: socketRegistrationData,
  isReAuth: boolean = false,
  lastMessageID: string = ""
) {
  const {username, room, userID} = userData;
  messageSocket.emit(socketActions.REGISTRATION, {
    username: username,
    room: room?.roomID,
    userID: userID,
    isReAuth,
    lastMessageID,
  });
}

export function sendMessageRequest(
  messageContent: messageInterface["message"]
) {
  messageSocket.emit(socketActions.SEND_MESSAGE, messageContent);
}

export function getMoreMessagesRequest(data: paginationData) {
  messageSocket.emit(socketActions.REQUEST_MORE_MESSAGES, data);
}

export function disconnectRequest(data?: any) {
  messageSocket.emit(socketActions.DISCONNECT_SESSION, data);
}
