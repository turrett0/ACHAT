import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
// import {selectIsToggleSystemColorScheme, selectUserID} from "./store/selectors";

import LoginPage from "./Pages/LoginPage";
import ChatPage from "./Pages/ChatPage";
import RequireAuth from "./hoc/RequireAuth";

const theme = {
  colors: {
    mainBgBlue: " rgb(59, 77, 145)",
    mainTextColor: "#FFFFFF",
    mainBgColor: "#FFFFFF",
  },
};

//Слеплять сообщения подряд в один элемент

const App: React.FC = () => {
  // const toggleToSystemColorScheme = useSelector(
  //   selectIsToggleSystemColorScheme
  // );

  // const {setToggleSystemColorScheme} = useActions();

  // useEffect(() => {
  //   document.body.setAttribute(
  //     "data-autotheme",
  //     String(toggleToSystemColorScheme)
  //   );
  //   localStorage.setItem(
  //     "systemColorScheme",
  //     JSON.stringify(toggleToSystemColorScheme)
  //   );
  // }, [toggleToSystemColorScheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
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

        {/* <button
          onClick={() => {
            setToggleSystemColorScheme();
          }}
          >
          Auto theme
        </button> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
