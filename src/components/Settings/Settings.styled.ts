import styled from "styled-components";

export const SettingsBG = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;

  &.settings-enter {
    transform: translateX(-100%);
  }
  &.settings-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  &.settings-exit {
    transform: translateX(0%);
  }
  &.settings-exit-active {
    transform: translateX(-100%);
    transition: transform 300ms;
  }
`;

export const SettingsWrapper = styled.div`
  padding: 40px 0;
  background: ${({theme}) => theme.bgColor};
  border: 2px solid ${({theme}) => theme.textColor};
  color: ${({theme}) => theme.reversedTextColor};
  border-left: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 300px;
  z-index: 9;
  box-shadow: 13px 0px 8px 0px rgba(34, 60, 80, 0.2);
  overflow: scroll;

  & .twitter-picker {
    margin: 14px 0;
  }
`;

export const SettingsBlock = styled.div`
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
