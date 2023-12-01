import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from '../Context/global.context';


const Favs = () => {
  const { state } = useGlobalContext();
  const { favs } = state;
  const deleteFromFavorites = useGlobalContext().deleteFromFavorites;

  const themeClass = state.theme === "dark" ? "dark-theme" : "light-theme";

  const handleDelete = (item) => {
    deleteFromFavorites(item);
  };

  return (
    <div className={themeClass}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((favItem) => (
          <Card
            key={favItem.id}
            item={favItem}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;