import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import {selectAllUsers} from "../store/selectors";
import {AiOutlineMenu} from "react-icons/ai";

const CustomHeader = styled.header`
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

const MenuButton = styled.button`
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

const Header = () => {
  const {controlMenu} = useActions();
  const onlineUserCount = useSelector(selectAllUsers).length;
  return (
    <CustomHeader>
      <MenuButton onClick={() => controlMenu()}>
        <AiOutlineMenu />
      </MenuButton>
      ACHAT | Online: {onlineUserCount}
    </CustomHeader>
  );
};

export default Header;
