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

export default GlobalStyles;
