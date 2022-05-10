import styled from "styled-components";

export const MessageBody = styled.div.attrs(
  (props: {author: string; type: string}) => props
)`
  position: relative;
  background-color: ${(props) =>
    props.author === "mine"
      ? props.theme.mineMessageColor
      : props.theme.strangerMessageColor};
  min-width: 10vw;
  max-width: 35vw;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: ${(props) =>
    props.author === "mine" ? "flex-end" : "flex-start"};
  right: ${(props) => (props.author === "mine" ? 0 : "initial")};
  margin: 25px 15px 0 15px;
  border-radius: 0.5rem;
  padding: ${(props) => (props.type === "fileMessage" ? "0" : "5px 10px")};
  color: white;
  word-wrap: break-word;

  & img {
    width: 100%;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    & {
      max-width: 65%;
    }
  }
`;

export const Notification = styled.div`
  align-self: center;
  width: 25%;
  text-align: center;
  margin: 8px 0;
  font-size: 12px;
  color: ${(props) => props.theme.reversedTextColor};
`;

export const MessageText = styled.span`
  font-size: 16px;
  width: 100%;
  padding: 10px 10px 0 10px;
`;

export const MessageSpan = styled.span`
  font-size: 9px;
  margin-right: 4px;
`;

export const MessageData = styled.div`
  align-self: flex-end;
  height: 18px;
  padding: 0 4px;
`;
