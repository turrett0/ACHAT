//@ts-nocheck
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

html, #root, body  {
height: 100vh;
  
}


body {
  background:   ${({theme}) => theme.bgColor} 
}
`;

export const GlobalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`;

export const AppComponent = styled.div`
  height: 94%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default GlobalStyles;
