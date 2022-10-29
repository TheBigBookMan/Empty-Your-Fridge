import React from "react";
import { recipeStyles as recipes } from "./styles/RecipesStyles";

//TODO map the array of recipesInfoArr to create the li with all info

// TODO add in a favourites button from fontawesome with the love heart

const Recipes = ({ recipesInfoArr }) => {
  console.log(recipesInfoArr[0]);
  const spreadRecipes = recipesInfoArr[0];
  return (
    <div style={recipes.recipesContainer}>
      <h2>Recipes</h2>
      <div style={recipes.recipesBox}>
        {/* NEED TO FIGURE OUT WHY MAP NOT WORKING, SOMETHING TO DO WITH UNDEFINED ON LOAD SO MAYBE CHECK OUT USEEFFET!?*/}
        {spreadRecipes.map((recipe) => (
          <div style={recipes.recipe}>
            <h5>{recipe.label}</h5>
            <a href={`${recipes.url}`}>
              <p style={recipes.link}>Link</p>
            </a>
            <img
              style={recipes.pic}
              src={`${recipes.image}`}
              alt={`${recipe.label}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
