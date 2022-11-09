import React from "react";
import "./styles/recipeStyle.css";
import { recipeStyles as style } from "./styles/RecipesStyles";
import { useRecipeContext } from "../../utils/RecipesContext";
import { useFavouriteContext } from "../../utils/FavouritesContext";
import { useWindowWidthContext } from "../../utils/WindowWidthContext";

// TODO add in global state of the favourites array

//TODO add the favourites array to the local storage

const Recipes = () => {
  const { recipes } = useRecipeContext();
  const { favourites, addFavourite } = useFavouriteContext();
  const { windowWidth, setWindowWidth } = useWindowWidthContext();
  let windowSize;

  const handleChange = (label, link) => {
    const inputToFavs = { label, link };
    addFavourite(inputToFavs);
  };

  console.log(windowWidth);
  if (windowWidth <= 730) {
    windowSize = { ...style.recipesContainer, ...style.medium };
  } else {
    windowSize = style.recipesContainer;
  }

  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (
        <li style={style.recipe} key={recipe.label + index}>
          <h5 style={style.name}>{recipe.label}</h5>
          <div style={style.link}>
            <div style={style.linkStar}>
              <a href={`${recipe.url}`} target="_blank">
                Link
              </a>
              <i
                style={style.star}
                onClick={() => handleChange(recipe.label, recipe.url)}
                className="fa-regular fa-star star"
              ></i>
            </div>
          </div>
          <img
            style={style.pic}
            src={`${recipe.image}`}
            alt={`${recipe.label}`}
          />
        </li>
      ));

  return (
    <div style={windowSize}>
      <h2>Recipes</h2>
      <ul style={style.recipesBox}>
        {/* NEED TO FIGURE OUT WHY MAP NOT WORKING, SOMETHING TO DO WITH UNDEFINED ON LOAD SO MAYBE CHECK OUT USEEFFET!?*/}

        {mappedRecipes}
      </ul>
    </div>
  );
};

export default Recipes;
