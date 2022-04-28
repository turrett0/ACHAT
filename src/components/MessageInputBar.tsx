import {useEffect, useRef} from "react";
import styled from "styled-components";
import {messageSocket} from "../api/websocket";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import useActions from "../hooks/useActions";

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: ${({theme}) => theme.accentColor};
`;
const MessageInput = styled.input`
  width: 90%;
  height: 90%;
  outline: none;
  padding: 5px 10px;
  border: none;
  background: none;
  color: white;
  &::placeholder {
    color: white;
  }
`;
const MessageButton = styled.button`
  color: #fff;
  height: 90%;
  cursor: pointer;
  width: 8%;
  background: none;
  border: none;
  outline: none;
`;

const MessageInputBar = () => {
  const {clearMessages} = useActions();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length > 0) {
      messageSocket.connect();
      messageSocket.emit("chatMessage", inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const onDisconnectHandler = () => {
    messageSocket.emit("disconnectSession");
    messageSocket.disconnect();
    clearMessages();
    navigate("/login");
  };

  return (
    <MessageWrapper>
      <MessageButton onClick={() => onDisconnectHandler()}>Выйти</MessageButton>
      <form
        onSubmit={onSubmitHandler}
        style={{width: "100vw", display: "flex", alignItems: "center"}}
      >
        <MessageInput
          type="text"
          placeholder="Напишите что нибудь..."
          ref={inputRef}
        />
        <MessageButton type="submit">
          <AiOutlineArrowUp fill={"#FFF"} fontSize="20px" />
        </MessageButton>
      </form>
    </MessageWrapper>
  );
};

export default MessageInputBar;
