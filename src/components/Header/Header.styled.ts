import styled from "styled-components";
import {IconButton} from "../IconButton";

export const CustomHeader = styled.header`
  background-color: ${({theme}) => theme.accentColor};
  color: ${({theme}) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 10;
  top: 0;
`;

export const HeaderMenuButton = styled(IconButton)`
  right: 0;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LeaveButton = styled(IconButton)`
  transform: rotate(180deg);
`;
