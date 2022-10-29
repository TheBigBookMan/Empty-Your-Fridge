import React from "react";
import { recipeStyles as recipes } from "./styles/RecipesStyles";

//! DELETE THIS
import pic from "./pic.png";

//TODO map the array of recipesInfoArr to create the li with all info

// TODO add in a favourites button from fontawesome with the love heart

const Recipes = ({ recipesInfoArr }) => {
  console.log(recipesInfoArr);
  return (
    <div style={recipes.recipesContainer}>
      <h2>Recipes</h2>
      <div style={recipes.recipesBox}>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <a href="#">
            <p style={recipes.link}>Link</p>
          </a>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
