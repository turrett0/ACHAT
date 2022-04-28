import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {messageInterface} from "../store/messagesReducer/state";
import {selectUserID} from "../store/selectors";

const MessageBody = styled.div.attrs(
  (props: {author: string; color: string}) => props
)`
  position: relative;
  background-color: ${(props) =>
    props.author === "mine"
      ? props.theme.mineMessageColor
      : props.theme.strangerMessageColor};
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: ${(props) =>
    props.author === "mine" ? "flex-end" : "flex-start"};
  right: ${(props) => (props.author === "mine" ? 0 : "initial")};
  margin: 25px 15px 0 15px;
  border-radius: 0.5rem;
  padding: 5px 10px;
  color: white;
  word-wrap: break-word;
`;

const Notification = styled.div`
  align-self: center;
  width: 25%;
  text-align: center;
  margin: 8px 0;
  font-size: 12px;
`;

const MessageText = styled.span`
  font-size: 16px;
  width: 100%;
  padding: 10px 0 0 10px;
`;

const MessageSpan = styled.span`
  font-size: 9px;
  margin-right: 4px;
`;

interface Props {
  userInfo: messageInterface;
}

const Message: React.FC<Props> = ({userInfo}) => {
  const {userData, body, time} = userInfo;
  const currentUserID = useSelector(selectUserID);

  const author = userData.id === currentUserID ? "mine" : "stranger";
  return userData.id === "system" ? (
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
