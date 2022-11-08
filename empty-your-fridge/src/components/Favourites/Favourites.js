import React from "react";
import { favouritesStyles as favourites } from "./styles/FavouritesStyles";

//TODO can have the array of ingredients prop handed through and loop through and add them to local storage as a history to click on so that users can quick add to the bowl

//TODO need to make the star red to then click and remove from array

const Favourites = () => {
  return (
    <div style={favourites.favouritesContainer}>
      <h2 style={favourites.favouritesHeader}>Favourites</h2>
      <ul style={favourites.recipeContainer}>
        <li style={favourites.recipeItem}>
          <a href="#" style={favourites.title}>
            <p>Chicken soup so yummy i love it so much</p>
          </a>
          <i style={favourites.star} className="fa-regular fa-star star"></i>
        </li>
      </ul>
    </div>
  );
};

export default Favourites;
