import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactElement[];
}

const MessageBoxComponent = styled.div`
  width: 100vw;
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  height: 95vh;
`;

const MessageBox = ({children}: Props) => {
  return <MessageBoxComponent>{children}</MessageBoxComponent>;
};

export default MessageBox;
