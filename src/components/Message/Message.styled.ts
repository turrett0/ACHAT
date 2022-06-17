import styled from "styled-components";

export const MessageBody = styled.div.attrs(
  (props: {author: string; type: string}) => props
)`
  position: relative;
  background-color: ${(props) =>
    props.author === "mine"
      ? props.theme.mineMessageColor
      : props.theme.strangerMessageColor};
  border: ${(props) =>
    props.author === "mine"
      ? `1px solid ${props.theme.mineMessageColor}`
      : `1px solid ${props.theme.strangerMessageColor}`};

  min-width: ${({type}) => (type === "textMessage" ? "13vh" : "")};
  max-width: ${({type}) => (type === "textMessage" ? "35vh" : "200px")};

  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: ${(props) =>
    props.author === "mine" ? "flex-end" : "flex-start"};
  right: ${(props) => (props.author === "mine" ? 0 : "initial")};
  margin: 15px;
  border-radius: 0.5rem;
  padding: ${(props) => (props.type === "fileMessage" ? "0" : "5px")};
  color: white;
  word-wrap: break-word;

  img {
    height: 100%;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    & {
      max-width: 65%;
    }
  }
`;

export const LoadingPlaceholder = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 2rem;
    height: 2rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    & svg {
      animation: spinner infinite 1s linear;
    }
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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
  padding: 10px;
  margin-bottom: 1rem;
`;

export const MessageSpan = styled.span`
  font-size: 10px;
  margin-right: 4px;
`;

export const MessageData = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  height: 18px;
  padding: 0 4px;
`;

export const MessageFlowData = styled.div`
  position: absolute;
  bottom: 5px;
  right: 0;
  backdrop-filter: blur(2px);
`;
