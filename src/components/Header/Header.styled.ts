import styled from "styled-components";

export const CustomHeader = styled.header`
  background-color: ${({theme}) => theme.accentColor};
  color: ${({theme}) => theme.textColor};
  display: flex;
  align-items: center;
  position: sticky;
  padding: 5px 10px;
  width: 100vw;
  z-index: 10;
  top: 0;
`;

export const HeaderMenuButton = styled.button`
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
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;
