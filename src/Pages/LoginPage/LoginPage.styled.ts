import styled from "styled-components";

export const LoginForm = styled.form.attrs(
  (props: {modeSwitcher: boolean; disabled: boolean}) => props
)`
  border-radius: 4px;
  display: flex;
  height: 40px;
  margin-bottom: 1rem;
  transition: 0.1s ease-out;

  & input,
  & button {
    outline: none;
    background: none;
    color: ${({theme, modeSwitcher}: any) =>
      modeSwitcher ? theme.textColor : theme.reversedTextColor};
  }

  & input {
    background-color: ${({theme, disabled}) =>
      disabled ? "transparent" : "lightgray"};
    border: 1px solid lightgray;
    border-radius: 4px 0 0 4px;
    padding: 10px;
    height: 100%;
    width: 90%;
    border-right: none;
    font-size: 16px;
    color: ${({theme}) => theme.reversedTextColor};
    transition: 0.05s ease-out;

    &::placeholder {
      color: ${({theme}) => theme.reversedTextColor};
    }
    &:focus {
      border: 2px solid ${({theme}) => theme.accentColor};
    }
  }

  & button {
    border-radius: 0 4px 4px 0;
    overflow: hidden;
    width: 10%;
    height: 100%;
    background-color: ${({theme, disabled}) =>
      disabled ? theme.accentColor : "lightgray"};
    color: ${({theme, disabled}) => (disabled ? theme.textColor : "lightgray")};
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  max-width: 600px;
  margin: 20vh auto;

  & select {
    text-align: center;
    outline: none;
    background: none;
    color: ${({theme}) => theme.textColor};
  }
`;
