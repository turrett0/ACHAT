import styled from "styled-components";
import {IoIosAttach} from "react-icons/io";

export const MessageWrapper = styled.div.attrs(
  (props: {isConnected: boolean}) => props
)`
  background-color: ${({theme, isConnected}) =>
    isConnected ? theme.accentColor : "lightgray"};
`;

export const MessageBarInner = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 100vw;
`;
export const MessageInput = styled.input`
  width: 95%;
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

export const CustomForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;
