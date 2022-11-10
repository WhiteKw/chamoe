import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authService } from "util/fbase";

import Navigation from "components/Navigation/Navigation";
import Main from "pages/Main";
import SongInfo from "pages/SongInfo";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

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
    
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<Main />} />
          <Route path="/song-info" element={<SongInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
