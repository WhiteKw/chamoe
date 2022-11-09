import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from "Components/Navigation/Navigation";

import Main from 'pages/Main';

import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<Main/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
