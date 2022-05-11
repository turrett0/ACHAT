import React, {useState, useEffect, useCallback} from "react";
import {useSelector} from "react-redux";
import {
  messageInterface,
  messageAuthor,
} from "../../store/messagesReducer/state";
import {selectUserID} from "../../store/selectors";
import base64Converter from "../../utils/Base64Convert";
import Modal from "../Modal/Modal";
import {
  MessageBody,
  MessageText,
  MessageSpan,
  MessageData,
} from "./Message.styled";
import MessageImage from "./MessageImage";

interface Props {
  userInfo: messageInterface;
}

const Message: React.FC<Props> = ({userInfo}) => {
  const {userData, message, time} = userInfo;
  const currentUserID = useSelector(selectUserID);
  const [image, setImage] = useState<any>(null);
  const [imageFullScreen, setImageFullScreen] = useState<boolean>(false);
  const author: messageAuthor =
    userData.userID === currentUserID ? "mine" : "stranger";

  useEffect(() => {
    base64Converter(message, setImage);
  }, []);

  const onImageClickHandler = useCallback(() => {
    setImageFullScreen((prev) => !prev);
  }, []);

  return (
    <>
      <MessageBody author={author} type={message.type}>
        {image && (
          <MessageImage
            image={image}
            onImageClickHandler={onImageClickHandler}
          />
        )}

        <MessageText>{message.text}</MessageText>
        <MessageData>
          {author !== "mine" && <MessageSpan>{userData.username}</MessageSpan>}
          <MessageSpan>{time}</MessageSpan>
        </MessageData>
      </MessageBody>
      {imageFullScreen && (
        <Modal bgColor={"rgba(0,0,0,.8)"} callback={setImageFullScreen}>
          <div style={{alignSelf: "center", margin: "0 auto"}}>
            <img
              src={"data:image/jpeg;base64" + image}
              alt={image.type}
              style={{
                maxWidth: "80vw",
                maxHeight: "60vh",
                objectFit: "contain",
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Message;
