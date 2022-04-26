import {useSelector} from "react-redux";
import Message from "../components/Message";
import MessageBox from "../components/MessageBox";
import {selectNewMessages} from "../store/selectors";
import {v4 as uuid} from "uuid";
import MessageInputBar from "../components/MessageInputBar";

const ChatPage = () => {
  const messages = useSelector(selectNewMessages);
  return (
    <>
      <MessageBox>
        {messages.map((userInfo) => (
          <Message userInfo={userInfo} key={uuid()} />
        ))}
      </MessageBox>
      <MessageInputBar />
    </>
  );
};

export default ChatPage;
