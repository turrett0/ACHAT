import {useSelector} from "react-redux";
import Message from "../components/Message/Message";
import {selectNewMessages} from "../store/selectors";
import styled from "styled-components";
import MessageBar from "../components/MessageBar/MessageBar";
import MessageBoxComponent from "../components/MessageBoxComponent";

const ChatPage = () => {
  return (
    <>
      <MessageBoxComponent />
      <MessageBar />
    </>
  );
};

export default ChatPage;
