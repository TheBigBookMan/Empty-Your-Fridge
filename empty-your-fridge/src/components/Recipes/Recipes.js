import React from "react";
import "./styles/recipeStyle.css";
import { recipeStyles as style } from "./styles/RecipesStyles";
import { useRecipeContext } from "../../utils/RecipesContext";

// TODO add in a favourites button from fontawesome with the love heart

const Recipes = () => {
  const { recipes } = useRecipeContext();

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
              <i style={style.star} className="fa-regular fa-star star"></i>
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
    <div style={style.recipesContainer}>
      <h2>Recipes</h2>
      <ul style={style.recipesBox}>
        {/* NEED TO FIGURE OUT WHY MAP NOT WORKING, SOMETHING TO DO WITH UNDEFINED ON LOAD SO MAYBE CHECK OUT USEEFFET!?*/}

        {mappedRecipes}
      </ul>
    </div>
  );
};

export default Recipes;
