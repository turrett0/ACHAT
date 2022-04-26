import React, {memo, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {messageSocket} from "../api/websocket";
import useActions from "../hooks/useActions";
import {selectCurrentRoom} from "../store/selectors";

const LoginForm = styled.div`
  /* border: ${({theme}) => `2px solid ${theme.colors.mainBgBlue}`}; */
  border-radius: 4px;
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & input,
  & button {
    width: 80%;
    padding: 10px;
    outline: none;
    margin-bottom: 10px;
  }

  & button {
    color: #fff;
    font-size: 16px;
    background-color: ${({theme}) => theme.colors.mainBgBlue};
    border: none;
    cursor: pointer;

    &:active {
      background-color: #2f4483d1;
    }
  }
`;

interface CustomizedState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const currentRoom = useSelector(selectCurrentRoom);
  const [room, setRoom] = useState<string | null>("1");
  const inputRef = useRef<HTMLInputElement>(null);
  const {setUserName, setCurrentRoom, clearMessages} = useActions();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CustomizedState;
  const fromPage = state?.from?.pathname || "/";

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length >= 3 && room) {
      setUserName(inputRef.current.value);
      if (currentRoom !== room) {
        clearMessages();
      }
      setCurrentRoom(room);

      messageSocket.emit("registerNewUser", inputRef.current.value, room);
      navigate(fromPage);
    } else {
      alert("Имя пользователя должно состоять минимум из 3 символов");
    }
  };

  const onRadioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom(e.target.value);
  };

  return (
    <>
      <div>{room}</div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="room1">
            <input
              id="room1"
              type="radio"
              name="radio"
              value="1"
              checked={room === "1" ? true : false}
              onChange={onRadioChangeHandler}
            />
            Room1
          </label>

          <label htmlFor="room2">
            {" "}
            <input
              id="room2"
              type="radio"
              name="radio"
              value="2"
              checked={room === "2" ? true : false}
              onChange={onRadioChangeHandler}
            />
            Room 2
          </label>

          <label htmlFor="room3">
            <input
              id="room3"
              type="radio"
              name="radio"
              value="3"
              checked={room === "3" ? true : false}
              onChange={onRadioChangeHandler}
            />
            <span>Room3</span>
          </label>
          <label htmlFor="randomRoom">
            <input
              id="randomRoom"
              type="radio"
              name="radio"
              value="random"
              checked={room === "random" ? true : false}
              onChange={onRadioChangeHandler}
            />
            <span>Random</span>
          </label>
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <LoginForm>
          <input
            type="text"
            name="login"
            ref={inputRef}
            autoComplete="off"
            placeholder="Ваш логин..."
          />
          <button type="submit">Отправить</button>
        </LoginForm>
      </form>
    </>
  );
};

export default memo(LoginPage);
