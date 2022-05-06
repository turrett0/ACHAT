import React, {useCallback, useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";
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
import {putMetaStyleTag} from "./GlobalStyles";

const App: React.FC = () => {
  const theme = useSelector(selectThemeColors);
  const isSystemColorScheme = useSelector(selectIsToggleSystemColorScheme);

  useEffect(() => {
    putMetaStyleTag(theme.accentColor);
  }, []);

  const colorSchemeChangeHandler = useCallback(() => {
    console.log(isSystemColorScheme);
  }, [isSystemColorScheme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", colorSchemeChangeHandler);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", colorSchemeChangeHandler);
    };
  }, [colorSchemeChangeHandler]);

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
