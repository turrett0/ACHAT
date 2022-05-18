import styled from "styled-components";

export const ImagePanelComponent = styled.div`
  height: 6rem;
  width: 100vw;
  background: ${({theme}) => theme.accentColor};
  border-bottom: 1px solid white;
  padding: 5px 0;

  & div {
    width: 20%;
    height: 100%;
  }
`;

export const ImageElement = styled.div`
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    margin-left: 10px;
    border-radius: 10px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  right: -15px;
  top: 0;
  background: gray;
  border-radius: 50%;
  border: 1px solid #fff;
  color: white;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
