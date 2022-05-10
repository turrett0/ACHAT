import React from "react";

interface Props {
  image: any;
  onImageClickHandler: () => void;
}

const MessageImage: React.FC<Props> = ({image, onImageClickHandler}) => {
  return (
    <img
      src={"data:image/jpeg;base64" + image}
      alt={image.type}
      onClick={onImageClickHandler}
    />
  );
};

export default MessageImage;
