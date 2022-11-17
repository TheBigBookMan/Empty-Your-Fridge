import React, { createContext, useContext, useState, useEffect } from "react";

const FavouriteContext = createContext();

export const useFavouriteContext = () => useContext(FavouriteContext);

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    const parsedInfo = JSON.parse(saved);
    return parsedInfo || "";
  });

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
  };

  const removeFavourite = (input) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.label !== input
    );
    setFavourites(newFavouritesList);
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
