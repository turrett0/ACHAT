import {useSelector} from "react-redux";
import styled from "styled-components";
import {selectNewMessages} from "../store/selectors";
import Message from "./Message/Message";
import {useEffect, useRef} from "react";
import {Notification} from "./Message/Message.styled";

const MessageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;

const MessageBoxComponent = () => {
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const messages = useSelector(selectNewMessages);
  useEffect(() => {
    if (messageBoxRef.current) {
      window.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, []);

  return (
    <MessageBox ref={messageBoxRef}>
      {messages.map((messageData, index) =>
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
