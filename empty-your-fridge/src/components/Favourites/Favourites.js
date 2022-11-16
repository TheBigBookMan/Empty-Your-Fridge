import React from "react";
import { useFavouriteContext } from "../../utils/FavouritesContext";

//TODO can have the array of ingredients prop handed through and loop through and add them to local storage as a history to click on so that users can quick add to the bowl

//TODO add i the react icons for the cancel

const Favourites = () => {
  const { favourites, removeFavourite } = useFavouriteContext();
  console.log(favourites);

  const handleRemove = (label) => {
    removeFavourite(label);
  };

  return (
    <div>
      <h2>Favourites</h2>
      {!favourites ? (
        <div>No favourites yet...</div>
      ) : (
        <ul>
          {favourites.map((recipe) => (
            <li>
              <a href={recipe.link} target="_blank" rel="noreferrer">
                <p>{recipe.label}</p>
              </a>
              <i
                className="fa-regular fa-circle-xmark cross"
                onClick={() => handleRemove(recipe.label)}
              ></i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
