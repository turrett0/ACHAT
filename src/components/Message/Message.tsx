import React, {useState} from "react";
import {useSelector} from "react-redux";
import {
  messageInterface,
  messageAuthor,
  messageTypes,
} from "../../store/messagesReducer/state";
import {selectUserID} from "../../store/selectors";
import Modal from "../Modal/Modal";
import {
  MessageBody,
  MessageText,
  MessageSpan,
  Notification,
} from "./Message.styled";

interface Props {
  userInfo: messageInterface;
}

const Message: React.FC<Props> = ({userInfo}) => {
  const {userData, message, time} = userInfo;
  const currentUserID = useSelector(selectUserID);
  const [image, setImage] = useState<any>(null);
  const [imageFullScreen, setImageFullScreen] = useState<boolean>(false);

  if (message.type === messageTypes.FILE_MESSAGE && message.file) {
    const blob = new Blob([message.file], {type: message.type});
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  const onImageClickHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setImageFullScreen((prev) => !prev);
  };

  const author: messageAuthor =
    userData.userID === currentUserID ? "mine" : "stranger";
  return userData.socketID === "system" ? (
    <Notification>{message.text}</Notification>
  ) : (
    <MessageBody author={author} type={message.type}>
      {image && (
        <img src={image} alt={image.type} onClick={onImageClickHandler} />
      )}
      {message.text?.length > 0 && <MessageText>{message.text}</MessageText>}
      <div style={{alignSelf: "flex-end", height: "18", padding: "0 4px"}}>
        {author !== "mine" && <MessageSpan>{userData.username}</MessageSpan>}
        <MessageSpan>{time}</MessageSpan>
      </div>
      {imageFullScreen && (
        <Modal bgColor={"rgba(0,0,0,.8)"} callback={setImageFullScreen}>
          <div style={{alignSelf: "center", margin: "0 auto"}}>
            <img
              src={image}
              alt={image.type}
              style={{width: "80vw", height: "60vh"}}
            />
          </div>
        </Modal>
      )}
    </MessageBody>
  );
};

export default Message;
