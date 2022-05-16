import styled from "styled-components";
import {IoIosAttach} from "react-icons/io";

export const MessageWrapper = styled.div.attrs(
  (props: {isConnected: boolean}) => props
)`
  background-color: ${({theme, isConnected}) =>
    isConnected ? theme.accentColor : "lightgray"};
  position: fixed;
  bottom: 0;
`;

export const MessageBarElement = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  height: 3rem;
  height: 3.5rem;
  width: 100vw;
`;
export const MessageInput = styled.input`
  width: 95%;
  height: 90%;
  outline: none;
  padding: 5px 10px;
  border: none;
  background: none;
  color: white;
  &::placeholder {
    color: white;
  }
`;

export const AttachIcon = styled(IoIosAttach)`
  width: 25px;
  height: 25px;
  color: white;
  cursor: pointer;
  transition: 100ms;
`;
