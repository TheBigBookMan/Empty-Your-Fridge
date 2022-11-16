import React from "react";
import { useRecipeContext } from "../../utils/RecipesContext";
import { useFavouriteContext } from "../../utils/FavouritesContext";

// TODO add in global state of the favourites array

//TODO add the favourites array to the local storage

//TODO add in a loading thing for when API call for the recipes

const Recipes = () => {
  const { recipes } = useRecipeContext();
  const { favourites, addFavourite } = useFavouriteContext();
  console.log(favourites);
  const handleChange = (label, link) => {
    const inputToFavs = { label, link };
    addFavourite(inputToFavs);
  };

  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (
        <li
          key={recipe.label + index}
          className="flex flex-col items-center border-solid border-2 border-slate-200 rounded-lg shadow-md bg-slate-200 p-2 w-full "
        >
          <h1 className="font-bold text-lg text-indigo-500 text-center ">
            {recipe.label}
          </h1>
          <div>
            <div className="flex flex-row gap-5 items-center">
              <a href={`${recipe.url}`} target="_blank" rel="noreferrer">
                Recipe Link
              </a>
              <i
                onClick={() => handleChange(recipe.label, recipe.url)}
                className="fa-regular fa-star star"
              ></i>
            </div>
          </div>
          <img
            className="w-40"
            src={`${recipe.image}`}
            alt={`${recipe.label}`}
          />
        </li>
      ));

  return (
    <div className="border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-2">
      <h2 className="font-bold text-lg text-center">Recipes</h2>
      <p>
        Click on the link to be taken to the webpage where the recipe is. You
        can also click on the star to favourite the recipe for later reference!
      </p>
      <ul className="flex flex-col items-center gap-2 h-[400px] overflow-y-scroll">
        {/* add in a loader for while data not there */}

        {!mappedRecipes ? (
          <div>Search for recipes by clicking "Search Recipes"!</div>
        ) : (
          mappedRecipes
        )}
      </ul>
    </div>
  );
};

export default Recipes;
