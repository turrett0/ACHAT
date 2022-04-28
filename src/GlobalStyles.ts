//@ts-nocheck
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

body {
  background:   ${({theme}) => theme.bgColor} 
}
`;

export const defaultLightModeTheme = {
  accentColor: "rgb(59, 77, 145)",
  strangerMessageColor: "lightgray",
  mineMessageColor: "rgb(59, 77, 145)",
  textColor: "black",
  bgColor: "white",
};

export const defaultDarkModeTheme = {
  accentColor: "rgb(59, 77, 145)",
  strangerMessageColor: "lightgray",
  mineMessageColor: "rgb(59, 77, 145)",
  textColor: "white",
  bgColor: "rgb(29,30,32)",
};

export default GlobalStyles;
