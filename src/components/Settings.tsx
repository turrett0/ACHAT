import {useEffect, useRef} from "react";
import {CirclePicker, TwitterPicker} from "react-color";
import {useSelector} from "react-redux";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import {
  selectIsMenuOpen,
  selectThemeColors,
  selectUserID,
} from "../store/selectors";
import Message from "./Message";

const SettingsWrapper = styled.div`
  padding-top: 20px;
  background: ${({theme}) => theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 300px;
  z-index: 10;
  box-shadow: 13px 0px 8px 0px rgba(34, 60, 80, 0.2);

  & .twitter-picker {
    margin: 14px 0;
  }
`;

const SettingsBlock = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    text-align: center;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
`;

const Settings = () => {
  const wrapperRef = useRef<any>(null);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const userID = useSelector(selectUserID);
  const themeColors = useSelector(selectThemeColors);
  const {setThemeColors, controlMenu} = useActions();

  const closeMenuHandler = (e: MouseEvent) => {
    if (
      isMenuOpen &&
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target)
    ) {
      controlMenu();
    }
  };

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("click", closeMenuHandler);
    return () => {
      document.documentElement.style.overflow = "initial";
      document.removeEventListener("click", closeMenuHandler);
    };
  }, []);

  return (
    <SettingsWrapper ref={wrapperRef}>
      <h1>Настройки</h1>
      <SettingsBlock>
        <p>Основной цвет</p>
        <CirclePicker
          color={themeColors.accentColor}
          onChange={(colors) =>
            setThemeColors({...themeColors, accentColor: colors.hex})
          }
        />
      </SettingsBlock>
      <SettingsBlock>
        <p>Цвет Сообщений</p>

        <Message
          userInfo={{
            userData: {id: userID, color: "", username: "Пользователь"},
            body: "Тестовое сообщение",
            time: "09:41",
          }}
        />
        <TwitterPicker
          colors={[
            "#3B4D91",
            "#FF6900",
            "#FCB900",
            "#7BDCB5",
            "#00D084",
            "#8ED1FC",
            "#ABB8C3",
            "#EB144C",
            "#F78DA7",
            "#9900EF",
          ]}
          triangle="top-right"
          color={themeColors.mineMessageColor}
          onChange={(colors) =>
            setThemeColors({...themeColors, mineMessageColor: colors.hex})
          }
        />
        <Message
          userInfo={{
            userData: {id: "0", color: "", username: "Пользователь"},
            body: "Тестовое сообщение",
            time: "09:41",
          }}
        />
        <TwitterPicker
          triangle="top-left"
          color={themeColors.strangerMessageColor}
          onChange={(colors) =>
            setThemeColors({...themeColors, strangerMessageColor: colors.hex})
          }
        />
      </SettingsBlock>
    </SettingsWrapper>
  );
};

export default Settings;
