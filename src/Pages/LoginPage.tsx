import React, {memo, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {messageSocket} from "../api/websocket";
import useActions from "../hooks/useActions";
import CustomSelect from "../components/CustomSelect";

const LoginForm = styled.form`
  border-radius: 4px;

  & input,
  & button {
    width: 100%;
    padding: 10px;
    outline: none;
    margin-bottom: 10px;
    background: none;
    color: ${({theme}) => theme.textColor};
  }

  & input {
    border: 1px solid lightgray;
    border-radius: 3px;
  }

  & button {
    background-color: ${({theme}) => theme.accentColor};
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin: 20vh auto;

  & select {
    text-align: center;
    outline: none;
    background: none;
    color: ${({theme}) => theme.textColor};
  }
`;

interface CustomizedState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const [room, setRoom] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {setUserName, setCurrentRoom} = useActions();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CustomizedState;
  const fromPage = state?.from?.pathname || "/";

  const onSelectChangeHandler = (roomValue: string) => {
    setRoom(roomValue);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length >= 3 && room) {
      setUserName(inputRef.current.value);
      setCurrentRoom(room);
      messageSocket.emit("registerNewUser", inputRef.current.value, room);
      navigate(fromPage);
    } else {
      if (inputRef.current && inputRef.current.value.length >= 3) {
        alert("Имя пользователя должно состоять минимум из 3 символов");
      } else if (!room) {
        alert("Необходимо выбрать комнату");
      }
    }
  };

  return (
    <>
      <Wrapper>
        <LoginForm onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="login"
            ref={inputRef}
            autoComplete="off"
            placeholder="Ваш логин..."
          />
          <button type="submit">Войти</button>
        </LoginForm>
        <CustomSelect onChangeHandler={onSelectChangeHandler} />
      </Wrapper>
    </>
  );
};

export default memo(LoginPage);
