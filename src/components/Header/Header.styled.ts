import styled from "styled-components";
import {IconButton} from "../MessageInputBar/MessageInputBar.styles";

export const CustomHeader = styled.header`
  background-color: ${({theme}) => theme.accentColor};
  color: ${({theme}) => theme.textColor};
  display: flex;
  align-items: center;
  position: sticky;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  width: 100vw;
  z-index: 10;
  top: 0;
`;

export const HeaderMenuButton = styled.button`
  right: 0;
  text-align: center;
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;
  cursor: pointer;

  & svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: white;
  }
`;

export const HeaderInner = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vh;
`;

export const LeaveButton = styled(IconButton)`
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  & svg {
    width: 25px;
    height: 25px;
  }
`;
