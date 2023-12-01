import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/global.context';

const Navbar = () => {
  const { state, dispatch } = useGlobalContext(); // Import dispatch function

  const handleThemeChange = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark"; // Toggle theme
    dispatch({ type: 'CHANGE_THEME', payload: newTheme }); // Dispatch Redux action to update theme
  };

  // Define la variable de ruta del icono de DH basada en el tema actual
  let dhIconPath = state.theme === 'dark' ? './images/DHblanco.png' : './images/DH.png';

  return (
    <nav>
      <div className="left-icons">
        <a href="https://www.digitalhouse.com/"><img src={dhIconPath} alt='DH-logo' className='dh'/></a>
      </div>

      <div className="right-icons">
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
        <Link to="/fav"><h3>Fav</h3></Link>

        <button onClick={handleThemeChange} className='luna'>
          {state.theme === 'dark' ? '🌞':'☪️' } {/* Display different emoji based on the theme */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;