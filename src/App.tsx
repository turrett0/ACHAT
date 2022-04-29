import React, {useEffect} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles, {
  defaultDarkModeTheme,
  defaultLightModeTheme,
} from "./GlobalStyles";
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
// import {selectIsToggleSystemColorScheme, selectUserID} from "./store/selectors";

import LoginPage from "./Pages/LoginPage";
import ChatPage from "./Pages/ChatPage";
import RequireAuth from "./hoc/RequireAuth";
import {useSelector} from "react-redux";
import {
  selectIsMenuOpen,
  selectIsToggleSystemColorScheme,
  selectThemeColors,
} from "./store/selectors";
import Settings from "./components/Settings/Settings";
import useActions from "./hooks/useActions";
import {putMetaStyleTag} from "./GlobalStyles";

//Слеплять сообщения подряд в один элемент

const App: React.FC = () => {
  const isMenuOpened = useSelector(selectIsMenuOpen);
  const theme = useSelector(selectThemeColors);
  const isAutoTheme = useSelector(selectIsToggleSystemColorScheme);
  const {setThemeColors} = useActions();
  useEffect(() => {
    document.body.setAttribute("data-autotheme", String(isAutoTheme));
    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addEventListener("change", (event) => {
    //     const autoColorScheme = !event.matches
    //       ? defaultLightModeTheme
    //       : defaultDarkModeTheme;
    //     setThemeColors(autoColorScheme);
    //   });

    //TODO: перезатирает тему при заходе / смене темы
    // window.matchMedia &&
    // window.matchMedia("(prefers-color-scheme: dark)").matches
    //   ? setThemeColors(defaultDarkModeTheme)
    //   : setThemeColors(defaultLightModeTheme);
  }, [isAutoTheme]);

  useEffect(() => {
    putMetaStyleTag(theme.accentColor);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Settings />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <ChatPage />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
