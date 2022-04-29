import {useRef} from "react";

import {messageSocket} from "../../api/websocket";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import useActions from "../../hooks/useActions";
import {
  MessageWrapper,
  MessageButton,
  MessageInput,
} from "./MessageInputBar.styles";

const MessageInputBar = () => {
  const {clearMessages, setCurrentRoom} = useActions();
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

  const onDisconnectHandler = () => {
    messageSocket.emit("disconnectSession");
    messageSocket.disconnect();
    clearMessages();
    setCurrentRoom(null);
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
