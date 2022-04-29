import {useSelector} from "react-redux";
import Message from "../components/Message/Message";
import {selectNewMessages} from "../store/selectors";
import {v4 as uuid} from "uuid";
import MessageInputBar from "../components/MessageInputBar/MessageInputBar";
import styled from "styled-components";

const MessageBox = styled.div`
  width: 100vw;
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  height: 95vh;
`;

const ChatPage = () => {
  const messages = useSelector(selectNewMessages);
  return (
    <>
      <MessageBox>
        {messages.map((userInfo) => (
          <Message userInfo={userInfo} key={uuid()} />
        ))}
      </MessageBox>
      <MessageInputBar />
    </>
  );
};

export default ChatPage;
