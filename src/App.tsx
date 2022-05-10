import React, {useCallback, useEffect} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ChatPage from "./Pages/ChatPage";
import RequireAuth from "./hoc/RequireAuth";
import {useSelector} from "react-redux";
import {
  selectIsToggleSystemColorScheme,
  selectThemeColors,
} from "./store/selectors";
import Settings from "./components/Settings/Settings";
import {Helmet} from "react-helmet";
import useActions from "./hooks/useActions";
import {getCurrentSystemAppear} from "./theme";

const App: React.FC = () => {
  const theme = useSelector(selectThemeColors);
  const isSystemColorScheme = useSelector(selectIsToggleSystemColorScheme);
  const {setDarkMode} = useActions();

  const colorSchemeChangeHandler = useCallback(
    (e: MediaQueryListEvent) => {
      const isDarkMode = e.matches;
      if (isSystemColorScheme) {
        isDarkMode ? setDarkMode(true) : setDarkMode(false);
      }
    },
    [isSystemColorScheme]
  );

  useEffect(() => {
    if (isSystemColorScheme) {
      const isDarkMode = getCurrentSystemAppear;
      if (isDarkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    const matchMediaExample = window.matchMedia("(prefers-color-scheme: dark)");
    matchMediaExample.addEventListener("change", colorSchemeChangeHandler);

    return () => {
      matchMediaExample.removeEventListener("change", colorSchemeChangeHandler);
    };
  }, [colorSchemeChangeHandler]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <meta name="theme-color" content={theme.accentColor} />
      </Helmet>
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
