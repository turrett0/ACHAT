//@ts-nocheck
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

html {
}

body {
    background:  ${({theme}) => theme.colors.mainBgColor};

   
}


body[data-autotheme=true]{
    @media(prefers-color-scheme: dark){
        /* background-color: black; */
    }
}
`;

export default GlobalStyles;
