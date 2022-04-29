import {useSelector} from "react-redux";
import useActions from "../../hooks/useActions";
import {
  selectAllUsers,
  selectCurrentRoom,
  selectIsMenuOpen,
} from "../../store/selectors";
import {AiOutlineMenu} from "react-icons/ai";
import {CustomHeader, HeaderInner, HeaderMenuButton} from "./Header.styled";

const Header = () => {
  const {controlMenu} = useActions();
  const currentRoom = useSelector(selectCurrentRoom);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const onlineUserCount = useSelector(selectAllUsers).length;
  return (
    <CustomHeader>
      <HeaderMenuButton onClick={() => controlMenu(!isMenuOpen)}>
        <AiOutlineMenu />
      </HeaderMenuButton>
      <span>ACHAT</span>
      <HeaderInner>
        {currentRoom && <span>Текущая комната: {currentRoom}</span>}
        <span>Online: {onlineUserCount}</span>
      </HeaderInner>
    </CustomHeader>
  );
};

export default Header;
