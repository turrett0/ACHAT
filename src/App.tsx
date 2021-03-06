import React, {useCallback, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ChatPage from "./Pages/ChatPage";
import RequireAuth from "./hoc/RequireAuth";
import {useSelector} from "react-redux";
import {selectIsToggleSystemColorScheme} from "./store/selectors";
import useActions from "./hooks/useActions";
import {getCurrentSystemAppear} from "./theme";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
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
      const isDarkMode = getCurrentSystemAppear();
      if (isDarkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    const colorSchemeMatchMedia = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    colorSchemeMatchMedia.addEventListener("change", colorSchemeChangeHandler);

    return () => {
      colorSchemeMatchMedia.removeEventListener(
        "change",
        colorSchemeChangeHandler
      );
    };
  }, [colorSchemeChangeHandler]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <ChatPage />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
