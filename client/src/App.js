import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { authService } from "util/fbase";

// Views
import Navigation from "components/Navigation/Navigation";
import Main from "pages/Main";
import SongInfo from "pages/SongInfo";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

// 로그인여부에 따라 라우팅 제어
import AuthSigned from "components/AuthSigned";
import AuthUnsigned from "components/AuthUnsigned";

// 404
import NotFound from "pages/NotFound";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setInit(true);
    });
  }, []);

  return (
    <div>
      {init ? (
        <BrowserRouter>
          <Routes>
            <Route element={<Navigation />}>
              <Route path="/" element={<Main />} />
              <Route path="/song-info" element={<SongInfo />} />
              <Route
                path="/signin"
                element={!isLoggedIn ? <SignIn/> : <>{navigate("/")}</>}
              />
              <Route
                path="/signup"
                element={
                  <AuthUnsigned isLoggedIn={isLoggedIn} element={<SignUp />} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "dfd"
      )}
    </div>
  );
}

export default App;
