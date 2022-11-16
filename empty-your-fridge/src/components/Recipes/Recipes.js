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
        <li key={recipe.label + index}>
          <h5>{recipe.label}</h5>
          <div>
            <div>
              <a href={`${recipe.url}`} target="_blank" rel="noreferrer">
                Link
              </a>
              <i
                onClick={() => handleChange(recipe.label, recipe.url)}
                className="fa-regular fa-star star"
              ></i>
            </div>
          </div>
          <img src={`${recipe.image}`} alt={`${recipe.label}`} />
        </li>
      ));

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {/* NEED TO FIGURE OUT WHY MAP NOT WORKING, SOMETHING TO DO WITH UNDEFINED ON LOAD SO MAYBE CHECK OUT USEEFFET!?*/}

        {mappedRecipes}
      </ul>
    </div>
  );
};

export default Recipes;
