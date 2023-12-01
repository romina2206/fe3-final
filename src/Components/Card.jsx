import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/global.context';

const Card = ({ item }) => {
  const { state, addToFavorites, deleteFromFavorites } = useGlobalContext();
  const favs = state.favs; 

  const themeClass = state.theme === "dark" ? "dark-theme" : "light-theme";


  const isAlreadyInFavs = favs.some(favItem => favItem.id === item.id);
  const [isAddedToFavs, setIsAddedToFavs] = useState(isAlreadyInFavs);

  const handleToggleFavorites = () => {
    const updatedFavs = favs.filter(favItem => favItem.id !== item.id);

    if (isAddedToFavs) {
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      deleteFromFavorites(item);
      setIsAddedToFavs(false);
    } else {
      localStorage.setItem('favs', JSON.stringify([...favs, item]));
      addToFavorites(item);
      setIsAddedToFavs(true);
    }
  };

  return (

    <div className="card">
          <div className={themeClass}>

      <Link to={'/dentista/' + item.id}>
        <img src="./images/doctor.jpg" alt="doctor" className="doctor" />
        <h4>{item.name}</h4>
        <h4>{item.username}</h4>
      </Link>
      
        <button onClick={handleToggleFavorites} className="favButton">
          {isAddedToFavs ? '❤️' : '🤍'}
        </button>
      
    </div>
    </div>

  );
};

export default Card;