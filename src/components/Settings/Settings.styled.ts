import styled from "styled-components";

export const SettingsBG = styled.div``;

export const SettingsWrapper = styled.div`
  padding: 5rem 0 5rem 0;

  background: ${({theme}) => theme.bgColor};
  border-left: 2px solid ${({theme}) => theme.textColor};
  color: ${({theme}) => theme.reversedTextColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;
  width: 300px;
  z-index: 9;
  box-shadow: -13px 0px 8px 0px rgba(34, 60, 80, 0.2);
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
