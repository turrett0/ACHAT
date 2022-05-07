import React, {memo, useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {messageSocket} from "../../api/websocket";
import useActions from "../../hooks/useActions";
import CustomSelect from "../../components/CustomSelect";
import {useSelector} from "react-redux";
import {
  selectConnectionStatus,
  selectIsDarkMode,
  selectUserID,
  selectUserName,
} from "../../store/selectors";
import {Wrapper, LoginForm} from "./LoginPage.styled";
import {connectionStatusTypes} from "../../store/appReducer/state";

interface CustomizedState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const userName = useSelector(selectUserName);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [room, setRoom] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {setUserName, setCurrentRoom, setAuth} = useActions();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CustomizedState;
  const fromPage = state?.from?.pathname || "/";
  const userID = useSelector(selectUserID);
  const connectionStatus = useSelector(selectConnectionStatus);
  const isConnected =
    connectionStatus === connectionStatusTypes.CONNECTED ? true : false;

  const onSelectChangeHandler = (roomValue: string) => {
    setRoom(roomValue);
  };

  useEffect(() => {
    if (inputRef.current && userName) {
      inputRef.current.value = userName;
    }
  }, []);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length >= 3 && room) {
      setUserName(inputRef.current.value);
      setCurrentRoom(room);
      setAuth(true);
      console.log("here");
      messageSocket.emit("registerNewUser", {
        username: inputRef.current.value,
        room: room,
        userID: userID,
      });

      navigate(fromPage);
    } else {
      if (inputRef.current && inputRef.current.value.length <= 3) {
        alert("Имя пользователя должно состоять минимум из 3 символов");
      } else if (!room) {
        alert("Необходимо выбрать комнату");
      }
    }
  };
  console.log(isConnected);

  return (
    <>
      <Wrapper>
        <LoginForm
          onSubmit={onSubmitHandler}
          modeSwitcher={isDarkMode}
          disabled={isConnected}
        >
          <input
            disabled={!isConnected}
            type="text"
            name="login"
            ref={inputRef}
            autoComplete="off"
            placeholder="Ваш логин..."
          />
          <button type="submit">Войти</button>
        </LoginForm>
        <CustomSelect
          onChangeHandler={onSelectChangeHandler}
          isConnected={isConnected}
        />
      </Wrapper>
    </>
  );
};

export default memo(LoginPage);
