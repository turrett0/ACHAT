import {useRef, useState} from "react";
import {messageSocket} from "../../api/websocket";
import {AiOutlineArrowUp} from "react-icons/ai";

import {
  MessageWrapper,
  IconButton,
  MessageInput,
} from "./MessageInputBar.styles";

const MessageInputBar = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length > 0) {
      messageSocket.connect();
      messageSocket.emit("chatMessage", inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0].name);
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <MessageWrapper>
      <input type="file" onChange={onFileChange} />
      <form
        onSubmit={onSubmitHandler}
        style={{width: "100vw", display: "flex", alignItems: "center"}}
      >
        <MessageInput placeholder="Напишите что нибудь..." ref={inputRef} />
        <IconButton type="submit">
          <AiOutlineArrowUp fill={"#FFF"} fontSize="20px" />
        </IconButton>
      </form>
    </MessageWrapper>
  );
};

export default MessageInputBar;
