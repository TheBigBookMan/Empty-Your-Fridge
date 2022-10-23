import React from "react";
import { favouritesStyles as favourites } from "./styles/FavouritesStyles";

//TODO can have the array of ingredients prop handed through and loop through and add them to local storage as a history to click on so that users can quick add to the bowl

const Favourites = () => {
  return (
    <div style={favourites.favouritesContainer}>
      <h2>Favourites</h2>
    </div>
  );
};

export default Favourites;
