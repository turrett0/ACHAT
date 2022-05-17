import {Helmet} from "react-helmet";
import {Outlet} from "react-router-dom";
import GlobalStyles, {
  AppComponent,
  GlobalContainer,
} from "../../theme/GlobalStyles";
import Header from "../Header/Header";
import Settings from "../Settings/Settings";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {selectThemeColors} from "../../store/selectors";

const Layout = () => {
  const theme = useSelector(selectThemeColors);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta name="theme-color" content={theme.accentColor} />
        </Helmet>
        <GlobalStyles />
        <Header />
        <AppComponent>
          <GlobalContainer>
            <Outlet />
          </GlobalContainer>
        </AppComponent>
        <Settings />
      </ThemeProvider>
    </>
  );
};

export default Layout;
