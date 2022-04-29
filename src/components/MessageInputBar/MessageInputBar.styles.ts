import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100vw;
  background-color: ${({theme}) => theme.accentColor};
  padding-bottom: env(safe-area-inset-bottom, 0.5vh);
  padding-top: env(safe-area-inset-bottom, 0.5vh); ;
`;
export const MessageInput = styled.input`
  width: 90%;
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
export const MessageButton = styled.button`
  color: #fff;
  height: 90%;
  cursor: pointer;
  width: 8%;
  background: none;
  border: none;
  outline: none;
`;