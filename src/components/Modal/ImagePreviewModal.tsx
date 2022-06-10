import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface Props {
  callback: any;
  children: React.ReactElement;
}

const ImageWrapper = styled.div`
  max-width: 80vw;
  max-height: 60vh;
  object-fit: contain;

  & img {
    max-width: 80vw;
    max-height: 60vh;
    object-fit: contain;
  }
`;

const ImagePreviewModal: React.FC<Props> = ({callback, children}) => {
  return (
    <Modal bgColor={"rgba(0,0,0,.8)"} callback={callback}>
      <ImageWrapper style={{alignSelf: "center", margin: "0 auto"}}>
        {children}
      </ImageWrapper>
    </Modal>
  );
};

export default ImagePreviewModal;
