import React from "react";
import { useFavouriteContext } from "../../utils/FavouritesContext";
import { AiOutlineClose } from "react-icons/ai";

const Favourites = () => {
  const { favourites, removeFavourite } = useFavouriteContext();

  const handleRemove = (label) => {
    removeFavourite(label);
  };

  return (
    <div className="border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-2">
      <h2 className="font-bold text-lg text-center">Favourites</h2>
      <p className="italic mb-2">
        Click on the name to go to the recipe webpage
      </p>
      {favourites.length === 0 ? (
        <div>No favourites yet...</div>
      ) : (
        <ul className="flex flex-col gap-2 max-h-[200px] overflow-y-scroll">
          {favourites.map((recipe, index) => (
            <li
              key={recipe + index}
              className="flex flex-row items-center justify-between border-b p-2"
            >
              <a href={recipe.link} target="_blank" rel="noreferrer">
                <p className="text-indigo-500 font-bold hover:text-indigo-300">
                  {recipe.label}
                </p>
              </a>
              <AiOutlineClose
                className="hover:cursor-pointer hover:scale-125 hover:rotate-180 transition-all ml-2"
                onClick={() => handleRemove(recipe.label)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
