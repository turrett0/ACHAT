import React, {useState} from "react";
import {useSelector} from "react-redux";
import {
  messageInterface,
  messageAuthor,
  messageTypes,
} from "../../store/messagesReducer/state";
import {selectUserID} from "../../store/selectors";
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
  const [image, setImage] = useState<any>();

  if (message.type === messageTypes.FILE_MESSAGE && message.file) {
    const blob = new Blob([message.file], {type: message.type});
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  const author: messageAuthor =
    userData.userID === currentUserID ? "mine" : "stranger";
  return userData.socketID === "system" ? (
    <Notification>{message.text}</Notification>
  ) : (
    <MessageBody author={author} type={message.type}>
      {image && <img src={image} alt={image.type} />}
      {message.text?.length > 0 && <MessageText>{message.text}</MessageText>}
      <div style={{alignSelf: "flex-end", height: "18", padding: "0 4px"}}>
        {author !== "mine" && <MessageSpan>{userData.username}</MessageSpan>}
        <MessageSpan>{time}</MessageSpan>
      </div>
    </MessageBody>
  );
};

export default Message;
