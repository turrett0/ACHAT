import {useRef, useState} from "react";
import ImagePanel from "../ImagePanel/ImagePanel";
import {messageTypes} from "../../store/messagesReducer/state";
import {useSelector} from "react-redux";
import {selectConnectionStatus} from "../../store/selectors";
import {connectionStatusTypes} from "../../store/appReducer/state";
import {sendMessageRequest} from "../../api/websocket/actions";
import {AiOutlineArrowUp as SendButtonIcon} from "react-icons/ai";
import {
  MessageWrapper,
  IconButton,
  MessageInput,
  MessageBarElement,
  AttachIcon,
} from "./MessageBar.styled";
import useActions from "../../hooks/useActions";

const MessageBar = () => {
  const {setIsLoadingMessages} = useActions();
  const isConnected =
    useSelector(selectConnectionStatus) === connectionStatusTypes.CONNECTED;
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      if (file) {
        sendMessageRequest({
          file: file,
          type: messageTypes.FILE_MESSAGE,
          text: inputRef.current.value,
          fileName: file.name,
          fileType: file.type,
        });
      } else if (!file && inputRef.current.value.trim().length !== 0) {
        sendMessageRequest({
          type: messageTypes.TEXT_MESSAGE,
          text: inputRef.current.value,
        });
      }
      setIsLoadingMessages(true);
      setFile(null);
      inputRef.current.value = "";
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <MessageWrapper isConnected={isConnected}>
      {file && <ImagePanel images={file} />}
      <MessageBarElement>
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{display: "none"}}
          />
          <AttachIcon />
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
