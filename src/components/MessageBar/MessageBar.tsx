import {useRef, useState} from "react";
import {messageSocket} from "../../api/websocket";
import {AiOutlineArrowUp as SendButtonIcon} from "react-icons/ai";
import {IoIosAttach as AttachIcon} from "react-icons/io";

import {
  MessageWrapper,
  IconButton,
  MessageInput,
  MessageBarElement,
} from "./MessageBar.styles";
import styled from "styled-components";
import ImagePanel from "../ImagePanel/ImagePanel";
import {
  fileMessageInterface,
  messageTypes,
  textMessageInterface,
} from "../../store/messagesReducer/state";

const MessageBar = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      if (file) {
        const fileMessage: fileMessageInterface = {
          file: file,
          type: messageTypes.FILE_MESSAGE,
          text: inputRef.current.value,
          fileName: file.name,
          fileType: file.type,
        };
        messageSocket.emit("chatMessage", fileMessage);
      } else if (!file && inputRef.current.value.length !== 0) {
        const textMessage: textMessageInterface = {
          type: messageTypes.TEXT_MESSAGE,
          text: inputRef.current.value,
        };
        messageSocket.emit("chatMessage", textMessage);
      }
      setFile(null);
      inputRef.current.value = "";
    }
  };

  const TestIcon = styled(AttachIcon)`
    width: 25px;
    height: 25px;
    color: white;
    cursor: pointer;
    transition: 100ms;
    &:hover {
      color: red;
    }
  `;

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <MessageWrapper>
      {file && <ImagePanel images={file} />}
      <MessageBarElement>
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{display: "none"}}
          />
          <TestIcon />
        </label>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <MessageInput placeholder="Напишите что нибудь..." ref={inputRef} />
          <IconButton type="submit">
            <SendButtonIcon />
          </IconButton>
        </form>
      </MessageBarElement>
    </MessageWrapper>
  );
};

export default MessageBar;
