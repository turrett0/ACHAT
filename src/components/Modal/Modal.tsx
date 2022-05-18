import {useRef, useEffect} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div.attrs((props: {bgColor: string}) => props)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${({bgColor}) => bgColor};
  display: flex;

  &.settings-enter {
    transform: translateX(100%);
  }
  &.settings-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  &.settings-exit {
    transform: translateX(0%);
  }
  &.settings-exit-active {
    transform: translateX(100%);
    transition: transform 500ms;
  }
`;

interface Props {
  children: React.ReactElement;
  bgColor?: string | null;
  callback: (state: boolean) => void;
}

const Modal: React.FC<Props> = ({children, bgColor, callback}) => {
  const wrapperRef = useRef<any>(null);

  const closeMenuHandler = (e: MouseEvent) => {
    if (e.target === wrapperRef.current) {
      callback(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeMenuHandler);

    return () => {
      document.removeEventListener("click", closeMenuHandler);
    };
  }, []);

  return createPortal(
    <ModalWrapper bgColor={bgColor || "transparent"} ref={wrapperRef}>
      {children}
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
