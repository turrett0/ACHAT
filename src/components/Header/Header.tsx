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
import {socketActions} from "../../api/websocket/state";

const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {clearMessages, setCurrentRoom, setAuth, setPaginationAvailability} =
    useActions();

  const {controlMenu} = useActions();
  const currentRoom = useSelector(selectCurrentRoom);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const onlineUserCount = useSelector(selectAllUsers).length;

  const onDisconnectHandler = () => {
    // messageSocket.disconnect();
    messageSocket.emit(socketActions.DISCONNECT_SESSION);
    clearMessages();
    setCurrentRoom(null);
    setAuth(false);
    setPaginationAvailability(true);
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
          <span>{currentRoom.roomName}</span>
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
