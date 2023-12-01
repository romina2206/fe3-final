import React, { useState, useEffect } from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/global.context'; 
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { state } = useGlobalContext(); 
  const navigate = useNavigate();

  const [socialIcons, setSocialIcons] = useState({
    facebook: './images/facebook.png',
    instagram: './images/instagram.png',
    tiktok: './images/tik-tok.png',
    whatsapp: './images/whatsapp.png',
    dh: './images/DH.png',
  });

  useEffect(() => {
    if (state.theme === 'dark') {
      setSocialIcons({
        facebook: './images/ico-facebook.png',
        instagram: './images/ico-instagram.png',
        tiktok: './images/ico-tiktok.png',
        whatsapp: './images/ico-whatsapp.png',
        dh: './images/DHblanco.png',
      });
    } else {
      setSocialIcons({
        facebook: './images/facebook.png',
        instagram: './images/instagram.png',
        tiktok: './images/tik-tok.png',
        whatsapp: './images/whatsapp.png',
        dh: './images/DH.png',
      });
    }
  }, [state.theme]);

  const handleLeftArrowClick = () => {
    const navTabs = ['/', '/contact', '/fav'];
    const currentPath = window.location.pathname;
    const currentIndex = navTabs.indexOf(currentPath);
  
    if (currentIndex === -1 || currentIndex === 0) {
      navigate(navTabs[navTabs.length - 1]); 
    } else {
      navigate(navTabs[currentIndex - 1]); 
    }
  };
  
  const handleRightArrowClick = () => {
    const navTabs = ['/', '/contact', '/fav'];
    const currentPath = window.location.pathname;
    const currentIndex = navTabs.indexOf(currentPath);
  
    if (currentIndex === -1 || currentIndex === navTabs.length - 1) {
      navigate(navTabs[0]); 
    } else {
      navigate(navTabs[currentIndex + 1]); 
    }
  };

  return (
    <footer>
      <div className='primera-linea'>
        <button onClick={handleLeftArrowClick}>⬅️</button>
        <Link to="/">Volver al Home</Link>
        <button onClick={handleRightArrowClick}>➡️</button>
      </div>
      <div className="second-line">
        <div className="left-icons">
          <p>Powered by</p>
          <a href="https://www.digitalhouse.com/"><img src={socialIcons.dh} alt='DH-logo' className='dh'/></a>
        </div>
        <div className="right-icons">
          <a href="https://www.facebook.com/"><img src={socialIcons.facebook} alt='Facebook' className='icono'/></a>
          <a href="https://www.instagram.com/"><img src={socialIcons.instagram} alt='Instagram' className='icono'/></a>
          <a href="https://www.tiktok.com/es/"><img src={socialIcons.tiktok} alt='Tiktok' className='icono'/></a>
          <a href="https://www.whatsapp.com/?lang=es_LA"><img src={socialIcons.whatsapp} alt='Whatsapp' className='icono'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
