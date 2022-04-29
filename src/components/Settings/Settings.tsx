import {useEffect, useRef} from "react";
import {CirclePicker, TwitterPicker} from "react-color";
import {useSelector} from "react-redux";
import useActions from "../../hooks/useActions";
import {CSSTransition} from "react-transition-group";
import {
  selectIsDarkMode,
  selectIsMenuOpen,
  selectThemeColors,
  selectUserID,
} from "../../store/selectors";
import Message from "../Message/Message";
import {SettingsBG, SettingsWrapper, SettingsBlock} from "./Settings.styled";

const Settings = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const userID = useSelector(selectUserID);
  const themeColors = useSelector(selectThemeColors);
  const isDarkMode = useSelector(selectIsDarkMode);
  const wrapperRef = useRef<any>(null);
  const {setThemeColors, controlMenu, setDarkMode, toggleSystemColorScheme} =
    useActions();

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("click", closeMenuHandler);
    }
    return () => {
      document.documentElement.style.overflow = "initial";
      document.removeEventListener("click", closeMenuHandler);
    };
  }, [isMenuOpen]);

  const closeMenuHandler = (e: MouseEvent) => {
    if (e.target === wrapperRef.current) {
      controlMenu(false);
    }
  };
  return (
    <CSSTransition
      classNames={"settings"}
      in={isMenuOpen}
      timeout={300}
      unmountOnExit
      onEnter={() => controlMenu(true)}
    >
      <SettingsBG ref={wrapperRef}>
        <SettingsWrapper>
          <h1>Настройки</h1>
          <SettingsBlock>
            <p>Основной цвет</p>
            <CirclePicker
              colors={[
                "#f44336",
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
                "#03a9f4",
                "#00bcd4",
                "#009688",
                "#4caf50",
                "#8bc34a",
                "#cddc39",
                "#ffeb3b",
                "#ffc107",
                "#ff9800",
                "#ff5722",
                "#607d8b",
                "#1d1e20",
              ]}
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
                setThemeColors({
                  ...themeColors,
                  strangerMessageColor: colors.hex,
                })
              }
            />
          </SettingsBlock>
          <button onClick={toggleSystemColorScheme}>
            Set System color scheme
          </button>
          <label>
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={setDarkMode}
            />
          </label>
        </SettingsWrapper>
      </SettingsBG>
    </CSSTransition>
  );
};

export default Settings;
