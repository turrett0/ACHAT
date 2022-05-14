import React, {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import useActions from "../../hooks/useActions";
import CustomSelect from "../../components/CustomSelect";
import {useSelector} from "react-redux";
import {Wrapper, LoginForm, InputWrapper, SignInIcon} from "./LoginPage.styled";
import {appStore, connectionStatusTypes} from "../../store/appReducer/state";
import {
  selectConnectionStatus,
  selectIsDarkMode,
  selectUserID,
  selectUserName,
} from "../../store/selectors";

import {registrationRequest} from "../../api/websocket/actions";

interface CustomizedState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const defaultSelectValue = {
    value: "room1",
    label: "Room 1",
  };
  const userName = useSelector(selectUserName);
  const isDarkMode = useSelector(selectIsDarkMode);
  const {setUserName, setCurrentRoom, setAuth} = useActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CustomizedState;
  const fromPage = state?.from?.pathname || "/";
  const userID = useSelector(selectUserID);
  const connectionStatus = useSelector(selectConnectionStatus);
  const isConnected =
    connectionStatus === connectionStatusTypes.CONNECTED ? true : false;
  const [room, setRoom] = useState<appStore["room"] | null>({
    roomID: defaultSelectValue.value,
    roomName: defaultSelectValue.label,
  });

  useEffect(() => {
    if (inputRef.current && userName) {
      inputRef.current.value = userName;
    }
  }, []);
  const onSelectChangeHandler = (roomValue: appStore["room"]) => {
    if (roomValue) {
      setRoom({roomID: roomValue.roomID, roomName: roomValue.roomName});
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length >= 3 && room) {
      setUserName(inputRef.current.value);
      setCurrentRoom(room);
      setAuth(true);

      registrationRequest({
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

  return (
    <>
      <Wrapper>
        <LoginForm
          onSubmit={onSubmitHandler}
          modeSwitcher={isDarkMode}
          disabled={isConnected}
        >
          <InputWrapper>
            <input
              disabled={!isConnected}
              type="text"
              name="login"
              ref={inputRef}
              autoComplete="off"
              placeholder="Ваш логин..."
            />
            <button type="submit">
              <SignInIcon />
            </button>
          </InputWrapper>
        </LoginForm>
        <CustomSelect
          onChangeHandler={onSelectChangeHandler}
          isConnected={isConnected}
          defaultSelectValue={defaultSelectValue}
        />
      </Wrapper>
    </>
  );
};

export default LoginPage;
