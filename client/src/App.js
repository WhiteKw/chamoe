import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { authService } from "util/fbase";

// Views
import Header from "components/header/Header";
import Navigation from "components/Navigation/Navigation";
import Main from "pages/Main";
import SongInfo from "pages/SongInfo";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

// 로그인여부에 따라 라우팅 제어
import RequireSign from "components/RequireSign";
import RequireUnsign from "components/RequireUnsign";

// 404
import NotFound from "pages/NotFound";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

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
          <Header/>

          <Routes>
            {/* 로그인 여부 상관 없이 접근 가능 */}
            <Route path="/" element={<Main />} />
            <Route path="/song-info" element={<SongInfo />} />

            {/* 로그인 헀을때만 접근 가능 */}
            <Route element={<RequireSign isLoggedIn={isLoggedIn} />}></Route>

            {/* 로그인 안했을때만 접근 가능 */}
            <Route element={<RequireUnsign isLoggedIn={isLoggedIn} />}>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      ) : (
        "dfd"
      )}
    </div>
  );
}

export default App;
