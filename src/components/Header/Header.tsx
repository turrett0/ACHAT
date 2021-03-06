import {useSelector} from "react-redux";
import useActions from "../../hooks/useActions";
import {AiOutlineMenu as MenuButton} from "react-icons/ai";
import {IoMdExit} from "react-icons/io";
import {useLocation, useNavigate} from "react-router-dom";
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
import {disconnectRequest} from "../../api/websocket/actions";

const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {clearMessages, setCurrentRoom, setAuth, setIsEmitScroll} =
    useActions();

  const {controlMenu} = useActions();
  const currentRoom = useSelector(selectCurrentRoom);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const onlineUsers = useSelector(selectAllUsers);

  const onDisconnectHandler = () => {
    disconnectRequest({
      room: currentRoom?.roomID,
      users: onlineUsers,
      query: "userLeave",
    });
    clearMessages();
    setCurrentRoom(null);
    setAuth(false);
    setIsEmitScroll(true);
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
        </HeaderInner>
      )}
      <HeaderMenuButton onClick={() => controlMenu(!isMenuOpen)}>
        <MenuButton />
      </HeaderMenuButton>
    </CustomHeader>
  );
};

export default Header;
