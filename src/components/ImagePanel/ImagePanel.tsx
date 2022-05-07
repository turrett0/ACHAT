import React, {useState} from "react";
import styled from "styled-components";

const ImagePanelComponent = styled.div`
  height: 6rem;
  width: 100vw;
  background: ${({theme}) => theme.accentColor};
  border-bottom: 1px solid white;
  padding: 5px 0;

  & img {
    width: 20%;
    height: 100%;
    margin: 0 10px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

interface Props {
  images: File;
}

const ImagePanel: React.FC<Props> = ({images}) => {
  const [images1, setImages1] = useState<any>();

  const imgBlob = new Blob([images], {type: images.type});
  const reader = new FileReader();
  reader.readAsDataURL(imgBlob);
  reader.onloadend = () => {
    setImages1(reader.result);
  };
  return (
    <ImagePanelComponent>
      <img src={images1} alt={images.type} />
    </ImagePanelComponent>
  );
};

export default ImagePanel;
