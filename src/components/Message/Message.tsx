import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {messageInterface} from "../../store/messagesReducer/state";
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
  const {userData, body, time} = userInfo;
  const currentUserID = useSelector(selectUserID);

  const author = userData.userID === currentUserID ? "mine" : "stranger";
  return userData.socketID === "system" ? (
    <Notification>{body}</Notification>
  ) : (
    <MessageBody author={author} color={userData.color}>
      <MessageText>{body}</MessageText>
      <div style={{alignSelf: "flex-end", height: "18"}}>
        {author !== "mine" && <MessageSpan>{userData.username}</MessageSpan>}
        <MessageSpan>{time}</MessageSpan>
      </div>
    </MessageBody>
  );
};

export default Message;
