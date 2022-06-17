import React, {memo, useEffect, useState} from "react";
import {CgSpinnerTwoAlt as LoadingIcon} from "react-icons/cg";
import {LoadingPlaceholder} from "./Message.styled";

interface Props {
  image: any;
  onImageClickHandler: () => void;
}

const MessageImage: React.FC<Props> = ({image, onImageClickHandler}) => {
  const [imgSrc, setImgSrc] = useState<string | null>("");

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImgSrc(image);
    };
  }, [image]);

  return (
    <>
      {imgSrc ? (
        <img src={image} alt={image.type} onClick={onImageClickHandler} />
      ) : (
        <LoadingPlaceholder>
          <LoadingIcon />
        </LoadingPlaceholder>
      )}
    </>
  );
};

export default memo(MessageImage);
