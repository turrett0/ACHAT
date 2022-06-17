import React, {useState} from "react";
import {AiOutlineClose as DeleteImageIcon} from "react-icons/ai";
import ImagePreviewModal from "../Modal/ImagePreviewModal";
import {
  ImagePanelComponent,
  ImageElement,
  CancelButton,
} from "./ImagePanel.styled";

interface Props {
  file: File;
  removeImage: (value: React.SetStateAction<File | null>) => void;
}

const ImagePanel: React.FC<Props> = ({file, removeImage}) => {
  const [images1, setImages1] = useState<any>();
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);

  const imgBlob = new Blob([file], {type: file.type});
  const reader = new FileReader();
  reader.readAsDataURL(imgBlob);
  reader.onloadend = () => {
    setImages1(reader.result);
  };
  return (
    <>
      <ImagePanelComponent>
        <ImageElement
          style={{
            position: "relative",
          }}
        >
          <img
            src={images1}
            alt={file.type}
            onClick={() => setFullScreenMode(true)}
          />
          <CancelButton onClick={() => removeImage(null)}>
            <DeleteImageIcon />
          </CancelButton>
        </ImageElement>
      </ImagePanelComponent>
      {fullScreenMode && (
        <ImagePreviewModal
          callback={setFullScreenMode}
          isDownloadable={false}
          imgSrc={images1}
        />
      )}
    </>
  );
};

export default ImagePanel;
