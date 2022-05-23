import {useRef, useState} from "react";
import ImagePanel from "../ImagePanel/ImagePanel";
import {messageTypes} from "../../store/messagesReducer/state";
import {useSelector} from "react-redux";
import {
  selectAllUsers,
  selectConnectionStatus,
  selectCurrentRoom,
  selectIsRandomSessionReady,
} from "../../store/selectors";
import {connectionStatusTypes} from "../../store/appReducer/state";
import {
  disconnectRequest,
  sendMessageRequest,
} from "../../api/websocket/actions";
import {AiOutlineArrowUp as SendButtonIcon} from "react-icons/ai";
import {
  MessageWrapper,
  MessageInput,
  MessageBarInner,
  AttachIcon,
  CustomForm,
} from "./MessageBar.styled";
import {AiOutlineReload as RetryButton} from "react-icons/ai";

import {IconButton} from "../IconButton";
import useActions from "../../hooks/useActions";

const MessageBar = () => {
  const isRandomSessionReady = useSelector(selectIsRandomSessionReady);
  const {clearMessages, setIsEmitScroll} = useActions();
  const onlineUsers = useSelector(selectAllUsers);
  const currentRoom = useSelector(selectCurrentRoom);
  const isRandomRoom = currentRoom?.roomID === "random";
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
      setFile(null);
      inputRef.current.value = "";
      setIsEmitScroll(true);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (+(e.target.files[0].size / 1000000).toFixed(2) < 3) {
        setFile(e.target.files[0]);
      } else {
        alert("Максимальный размер файла - 3мб");
      }
      e.target.value = "";
    }
  };

  const onChangeUserHandler = () => {
    if (isRandomRoom) {
      disconnectRequest({
        room: currentRoom.roomID,
        users: onlineUsers,
        query: "relaunch",
      });
      clearMessages();
    }
  };

  return (
    <MessageWrapper isConnected={isConnected}>
      {file && <ImagePanel images={file} removeImage={setFile} />}
      <MessageBarInner>
        {currentRoom?.roomID === "random" && (
          <IconButton
            onClick={onChangeUserHandler}
            disabled={!isRandomSessionReady}
          >
            <RetryButton />
          </IconButton>
        )}
        <label>
          <input
            disabled={!isRandomSessionReady && currentRoom?.roomID === "random"}
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{display: "none"}}
          />
          <AttachIcon />
        </label>
        <CustomForm onSubmit={onSubmitHandler}>
          <MessageInput
            placeholder="Сообщение..."
            ref={inputRef}
            disabled={!isRandomSessionReady && currentRoom?.roomID === "random"}
          />
          <IconButton type="submit">
            <SendButtonIcon />
          </IconButton>
        </CustomForm>
      </MessageBarInner>
    </MessageWrapper>
  );
};

export default MessageBar;
