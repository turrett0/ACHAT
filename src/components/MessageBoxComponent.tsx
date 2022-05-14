import {useSelector} from "react-redux";
import styled from "styled-components";
import {
  selectCurrentRoom,
  selectIsMessagesLoading,
  selectIsPaginationAvailable,
  selectNewMessages,
} from "../store/selectors";
import Message from "./Message/Message";
import {useCallback, useEffect, useRef} from "react";
import {Notification} from "./Message/Message.styled";
import {throttle} from "../utils/throttle";
import {getMoreMessagesRequest} from "../api/websocket/actions";
import {paginationData} from "../api/websocket/state";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import useActions from "../hooks/useActions";

const MessageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;

const MessageBoxComponent = () => {
  const isPaginationAvailable = useSelector(selectIsPaginationAvailable);
  const isMessagesLoading = useSelector(selectIsMessagesLoading);
  const {setIsLoadingMessages} = useActions();
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const messages = useSelector(selectNewMessages);
  const room = useSelector(selectCurrentRoom)?.roomID;
  const data = {
    lastMessageID: messages[0]?.messageID,
    require: 20,
    room,
  } as paginationData;

  const requestMessages = useCallback(
    throttle(() => {
      if (messageBoxRef.current) {
        if (document.documentElement.scrollTop < 100 && isPaginationAvailable) {
          console.log("req");
          // getMoreMessagesRequest(data);
          // setIsLoadingMessages(true);
        }
      }
    }, 1000),
    [data, isPaginationAvailable]
  );

  useEffect(() => {
    document.addEventListener("scroll", requestMessages);
    return () => {
      document.removeEventListener("scroll", requestMessages);
    };
  }, [requestMessages]);
  return (
    <MessageBox ref={messageBoxRef}>
      {isMessagesLoading && <LoadingSpinner />}
      {messages.map((messageData) =>
        messageData.userData.socketID === "system" ? (
          <Notification key={messageData.messageID}>
            {messageData.message.text}
          </Notification>
        ) : (
          <Message userInfo={messageData} key={messageData.messageID} />
        )
      )}
    </MessageBox>
  );
};

export default MessageBoxComponent;
