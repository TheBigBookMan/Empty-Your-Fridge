import React from "react";
import { recipeStyles as recipes } from "./styles/RecipesStyles";

//! DELETE THIS
import pic from "./pic.png";

// TODO prop of ingredients and selection will be transferred to fetch call API

//TODO have props passed of the array with user criteria and then arrange so fits in API call

const Recipes = () => {
  return (
    <div style={recipes.recipesContainer}>
      <h2>Recipes</h2>
      <div style={recipes.recipesBox}>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
        <div style={recipes.recipe}>
          <h5>Chicken wrap</h5>
          <p style={recipes.link}>Link</p>
          <img style={recipes.pic} src={pic} alt=" " />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
