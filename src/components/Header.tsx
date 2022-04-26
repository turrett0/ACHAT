import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {selectAllUsers} from "../store/selectors";

const CustomHeader = styled.header`
  background-color: ${({theme}) => theme.colors.mainBgBlue};
  color: ${({theme}) => theme.colors.mainTextColor};
  position: sticky;
  padding: 5px 10px;
  width: 100vw;
  z-index: 10;
  top: 0;
`;

const Header = () => {
  const onlineUserCount = useSelector(selectAllUsers).length;
  return <CustomHeader>ACHAT | Online: {onlineUserCount}</CustomHeader>;
};

export default Header;
