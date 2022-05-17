import {useSelector} from "react-redux";
import styled from "styled-components";
import {
  selectCurrentRoom,
  selectIsEmitScroll,
  selectIsMessagesLoading,
  selectIsPaginationAvailable,
  selectNewMessages,
} from "../store/selectors";
import Message from "./Message/Message";
import {useCallback, useEffect, useRef} from "react";
import {Notification} from "./Message/Message.styled";
import {getMoreMessagesRequest} from "../api/websocket/actions";
import {paginationData} from "../api/websocket/state";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import useActions from "../hooks/useActions";
import {debounce} from "../utils/debounce";

const MessageBox = styled.div`
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

const MessageBoxInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageBoxComponent = () => {
  const isEmitScroll = useSelector(selectIsEmitScroll);
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
    debounce(() => {
      if (messageBoxRef.current) {
        if (messageBoxRef.current.scrollTop < 500 && isPaginationAvailable) {
          getMoreMessagesRequest(data);
          setIsLoadingMessages(true);
        }
      }
    }, 1000),
    [data, isPaginationAvailable]
  );

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.addEventListener("wheel", requestMessages);
    }
    return () => {
      if (messageBoxRef.current) {
        messageBoxRef.current.removeEventListener("wheel", requestMessages);
      }
    };
  }, [requestMessages]);

  useEffect(() => {
    if (messageBoxRef.current && isEmitScroll) {
      messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, [messages.length]);

  return (
    <MessageBox ref={messageBoxRef}>
      <MessageBoxInner>
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
      </MessageBoxInner>
    </MessageBox>
  );
};

export default MessageBoxComponent;
