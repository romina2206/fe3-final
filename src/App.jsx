import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Fav from './Routes/Favs';
import React from 'react';
import { useGlobalContext } from './Context/global.context';



function App() {
  const { state } = useGlobalContext();

  const themeClass = state.theme === "dark" ? "dark-theme" : "light-theme";
  return (
    <div className={themeClass}>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dentista/:id' element={<Detail />} />
          <Route path='*' element={<h1>Page not found - Error 404</h1>} />
          <Route path='/fav' element={<Fav />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
