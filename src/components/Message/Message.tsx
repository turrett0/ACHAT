import React, {useState, useEffect, useCallback, memo} from "react";
import {useSelector} from "react-redux";
import {
  messageInterface,
  messageAuthor,
  messageTypes,
} from "../../store/messagesReducer/state";
import {selectUserID} from "../../store/selectors";
import ImagePreviewModal from "../Modal/ImagePreviewModal";
import {
  MessageBody,
  MessageText,
  MessageSpan,
  MessageData,
  MessageFlowData,
} from "./Message.styled";
import MessageImage from "./MessageImage";

interface Props {
  messageData: messageInterface;
}

const Message: React.FC<Props> = ({messageData}) => {
  const {userData, message, time} = messageData;
  const currentUserID = useSelector(selectUserID);
  const [image, setImage] = useState<any>(null);
  const [imageFullScreen, setImageFullScreen] = useState<boolean>(false);
  const author: messageAuthor =
    userData.userID === currentUserID ? "mine" : "stranger";

  useEffect(() => {
    if (messageData.message.type === messageTypes.FILE_MESSAGE) {
      setImage(messageData.message.file);
    }
  }, [messageData]);

  const onImageClickHandler = useCallback(() => {
    setImageFullScreen((prev) => !prev);
  }, []);

  return (
    <>
      <MessageBody author={author} type={message.type}>
        {image && (
          <>
            <MessageImage
              image={image}
              onImageClickHandler={onImageClickHandler}
            />
            <MessageFlowData>
              <MessageData>
                {author !== "mine" && (
                  <MessageSpan>{userData.username}</MessageSpan>
                )}
                <MessageSpan>{time}</MessageSpan>
              </MessageData>
            </MessageFlowData>
          </>
        )}

        {message.text.length > 0 && <MessageText>{message.text}</MessageText>}
        {message.type !== messageTypes.FILE_MESSAGE && (
          <MessageData>
            {author !== "mine" && (
              <MessageSpan>{userData.username}</MessageSpan>
            )}
            <MessageSpan>{time}</MessageSpan>
          </MessageData>
        )}
      </MessageBody>
      {imageFullScreen && (
        <ImagePreviewModal
          callback={setImageFullScreen}
          isDownloadable={true}
          imgSrc={image}
        />
      )}
    </>
  );
};

export default memo(Message);
