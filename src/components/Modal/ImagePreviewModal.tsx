import styled from "styled-components";
import Modal from "./Modal";
import {AiOutlineDownload as DownloadIcon} from "react-icons/ai";

interface Props {
  callback: any;
  imgSrc: string;
  isDownloadable: boolean;
}

const ImageModalWrapper = styled.div`
  max-width: 80vw;
  min-width: 200px;
  max-height: 60vh;
  min-height: 200px;
  object-fit: contain;
`;
const ImageWrapper = styled.div`
  position: relative;
  & img {
    max-width: 80vw;
    max-height: 60vh;
    object-fit: contain;
  }
`;

const DownloadLink = styled.a`
  color: ${({theme}) => theme.accentColor};
  text-decoration: none;
  font-size: 1.5rem;
  position: absolute;
  left: calc(50% - 1rem);
  bottom: -3rem;
`;

const ImagePreviewModal: React.FC<Props> = ({
  callback,
  imgSrc,
  isDownloadable,
}) => {
  return (
    <Modal bgColor={"rgba(0,0,0,.8)"} callback={callback}>
      <ImageModalWrapper style={{alignSelf: "center", margin: "0 auto"}}>
        <ImageWrapper>
          <img src={imgSrc} alt="preview" />
          {isDownloadable && (
            <DownloadLink href={imgSrc} download target="_blank">
              <DownloadIcon />
            </DownloadLink>
          )}
        </ImageWrapper>
      </ImageModalWrapper>
    </Modal>
  );
};

export default ImagePreviewModal;
