import {TwitterPicker, BlockPicker} from "react-color";
import {useSelector} from "react-redux";
import useActions from "../../hooks/useActions";
import {CSSTransition} from "react-transition-group";
import {
  selectIsDarkMode,
  selectIsMenuOpen,
  selectIsToggleSystemColorScheme,
  selectThemeColors,
  selectUserID,
} from "../../store/selectors";
import Message from "../Message/Message";
import {SettingsBG, SettingsWrapper, SettingsBlock} from "./Settings.styled";
import {messageTypes} from "../../store/messagesReducer/state";
import Modal from "../Modal/Modal";
import {
  defaultBlockPickerColors,
  defaultTwitterPickerColors,
} from "../../theme";

const Settings = () => {
  const isSystemColorScheme = useSelector(selectIsToggleSystemColorScheme);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const userID = useSelector(selectUserID);
  const themeColors = useSelector(selectThemeColors);
  const isDarkMode = useSelector(selectIsDarkMode);
  const {setThemeColors, controlMenu, setDarkMode, toggleSystemColorScheme} =
    useActions();

  return (
    <CSSTransition
      classNames={"settings"}
      in={isMenuOpen}
      timeout={300}
      unmountOnExit
      onEnter={() => controlMenu(true)}
    >
      <Modal callback={controlMenu}>
        <SettingsBG>
          <SettingsWrapper>
            <h1>Настройки</h1>
            <SettingsBlock>
              <p>Основной цвет</p>
              <BlockPicker
                width="90%"
                triangle="hide"
                colors={defaultBlockPickerColors}
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
                  userData: {
                    socketID: "test",
                    userID: userID,
                    color: "",
                    username: "Пользователь",
                  },
                  message: {
                    text: "Тестовое сообщение",
                    type: messageTypes.TEXT_MESSAGE,
                  },
                  time: "09:41",
                }}
              />
              <TwitterPicker
                colors={defaultTwitterPickerColors}
                triangle="top-right"
                color={themeColors.mineMessageColor}
                onChange={(colors) =>
                  setThemeColors({...themeColors, mineMessageColor: colors.hex})
                }
              />
              <Message
                userInfo={{
                  userData: {
                    socketID: "",
                    userID: "0",
                    color: "",
                    username: "Пользователь",
                  },
                  message: {
                    text: "Тестовое сообщение",
                    type: messageTypes.TEXT_MESSAGE,
                  },
                  time: "09:41",
                }}
              />
              <TwitterPicker
                colors={defaultTwitterPickerColors}
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
            <button
              onClick={toggleSystemColorScheme}
              style={{background: isSystemColorScheme ? "green" : "red"}}
            >
              Set System color scheme
            </button>{" "}
            <label>
              <span>Dark Mode</span>
              <input
                disabled={isSystemColorScheme}
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setDarkMode()}
              />
            </label>
          </SettingsWrapper>
        </SettingsBG>
      </Modal>
    </CSSTransition>
  );
};

export default Settings;
