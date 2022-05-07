import {useSelector} from "react-redux";
import useActions from "../../hooks/useActions";
import {AiOutlineMenu as MenuButton} from "react-icons/ai";
import {IoMdExit} from "react-icons/io";
import {useLocation, useNavigate} from "react-router-dom";
import {messageSocket} from "../../api/websocket";
import {
  selectAllUsers,
  selectCurrentRoom,
  selectIsMenuOpen,
} from "../../store/selectors";
import {
  CustomHeader,
  HeaderInner,
  HeaderMenuButton,
  LeaveButton,
} from "./Header.styled";

const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {clearMessages, setCurrentRoom, setAuth} = useActions();

  const {controlMenu} = useActions();
  const currentRoom = useSelector(selectCurrentRoom);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const onlineUserCount = useSelector(selectAllUsers).length;

  const onDisconnectHandler = () => {
    messageSocket.emit("disconnectSession");
    clearMessages();
    setCurrentRoom(null);
    setAuth(false);
    navigate("/login");
  };

  return (
    <CustomHeader>
      {pathname !== "/login" && (
        <LeaveButton onClick={() => onDisconnectHandler()}>
          <IoMdExit />
        </LeaveButton>
      )}
      {pathname === "/login" && <span>ACHAT</span>}
      {currentRoom && pathname !== "/login" && (
        <HeaderInner>
          <span>{currentRoom}</span>
          <span style={{opacity: "0.8"}}>{onlineUserCount} пользователей</span>
        </HeaderInner>
      )}
      <HeaderMenuButton onClick={() => controlMenu(!isMenuOpen)}>
        <MenuButton />
      </HeaderMenuButton>
    </CustomHeader>
  );
};

export default Header;
