import React from "react";
import styled from "styled-components";

export const IconButton = styled.button`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  text-align: center;

  & svg {
    color: #fff;
    height: 100%;
    width: 100%;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
