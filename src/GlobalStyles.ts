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
  textColor: "white",
  reversedTextColor: "black",
  bgColor: "white",
};

export const defaultDarkModeTheme = {
  accentColor: "rgb(59, 77, 145)",
  strangerMessageColor: "lightgray",
  mineMessageColor: "rgb(59, 77, 145)",
  textColor: "white",
  reversedTextColor: "white",
  bgColor: "rgb(29,30,32)",
};

export const putMetaStyleTag = (data: string) => {
  const allMetaTags = document.querySelectorAll("[name='theme-color']");
  allMetaTags.forEach((metaTag) => metaTag.remove());

  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = data;
  document.getElementsByTagName("head")[0].appendChild(meta);
};

export default GlobalStyles;
