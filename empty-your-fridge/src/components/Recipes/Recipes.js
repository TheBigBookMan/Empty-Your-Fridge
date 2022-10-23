import React from "react";
import { recipeStyles as recipes } from "./styles/RecipesStyles";

// TODO prop of ingredients and selection will be transferred to fetch call API

//TODO have props passed of the array with user criteria and then arrange so fits in API call

const Recipes = () => {
  return (
    <div style={recipes.recipesContainer}>
      <h2>Recipes</h2>
    </div>
  );
};

export default Recipes;
