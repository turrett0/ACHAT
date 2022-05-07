import {useSelector} from "react-redux";
import styled from "styled-components";
import {selectNewMessages} from "../store/selectors";
import Message from "./Message/Message";
import {v4 as uuid} from "uuid";

const MessageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;

const MessageBoxComponent = () => {
  const messages = useSelector(selectNewMessages);

  return (
    <MessageBox>
      {messages.map((userInfo) => (
        <Message userInfo={userInfo} key={uuid()} />
      ))}
    </MessageBox>
  );
};

export default MessageBoxComponent;
