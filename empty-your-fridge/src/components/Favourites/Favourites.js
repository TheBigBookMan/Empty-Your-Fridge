import React from "react";
import { useFavouriteContext } from "../../utils/FavouritesContext";
import { favouritesStyles } from "./styles/FavouritesStyles";

//TODO can have the array of ingredients prop handed through and loop through and add them to local storage as a history to click on so that users can quick add to the bowl

const Favourites = () => {
  const { favourites, removeFavourite } = useFavouriteContext();
  console.log(favourites);

  const handleRemove = (label) => {
    removeFavourite(label);
  };

  return (
    <div style={favouritesStyles.favouritesContainer}>
      <h2 style={favouritesStyles.favouritesHeader}>Favourites</h2>
      <ul style={favouritesStyles.recipeContainer}>
        {favourites.map((recipe) => (
          <li style={favouritesStyles.recipeItem}>
            <a
              href={recipe.link}
              target="_blank"
              style={favouritesStyles.title}
            >
              <p>{recipe.label}</p>
            </a>
            <i
              style={favouritesStyles.star}
              className="fa-regular fa-circle-xmark cross"
              onClick={() => handleRemove(recipe.label)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
