import React, { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();

export const useFavouriteContext = () => useContext(FavouriteContext);

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
  };

  const removeFavourite = (input) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.label !== input
    );
    setFavourites(newFavouritesList);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
