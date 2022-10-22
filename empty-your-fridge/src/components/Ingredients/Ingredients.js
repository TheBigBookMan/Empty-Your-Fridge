// var api_id = '215db5b9'
// var api_key = '3825b049c21e45afc20c029947cc4427'

// apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryIngredients}&app_id=${api_id}&app_key=${api_key}${health}${cuisine}${meal}`
import React, { useState } from "react";
import { cuisines, meals, health } from "../../utils/types";
import "./styles/Ingredients.css";
import { ingredientsStyles as style } from "./styles/IngredientsStyles";

const Ingredients = ({ setIngredientsArr, ingredientsArr }) => {
  // MIGHT NEED STATE FOR THE INGREDIENT ENTER SAVED TO THEN SHOW IN THE BOWL
  // PASS THE STATE AS A PROP TO THE BOWL COMPONENT
  const [newIngredientInput, setNewIngredientInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setIngredientsArr([...ingredientsArr, newIngredientInput]);
  };

  const handleIngredientInput = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setNewIngredientInput(inputValue);
  };

  return (
    <div style={style.ingredientsContainer}>
      <h3>
        Type in the ingredients and click "Add" to enter your ingredients to the
        list. When ready, click on "Search Recipes" to view all the yummy
        recipes that match your criteria!
      </h3>
      <form style={style.formContainer}>
        <form>
          <input
            type="text"
            style={style.ingredientInput}
            placeholder="Ingredients"
            onChange={handleIngredientInput}
            value={newIngredientInput}
          />
          <button
            onClick={handleInputChange}
            type="submit"
            className="ingredient-btn"
          >
            <strong>Add</strong>
          </button>
        </form>

        <select style={style.cuisineInput}>
          <option value="" selected disabled hidden>
            Cuisine type
          </option>
          {cuisines.map((cuisine) => (
            <option value={cuisine.toLowerCase()}>{cuisine}</option>
          ))}
        </select>
        <select style={style.mealInput}>
          <option value="" selected disabled hidden>
            Meal type
          </option>
          {meals.map((meal) => (
            <option value={meal.toLowerCase()}>{meal}</option>
          ))}
        </select>
        <select style={style.healthType}>
          <option value="" selected disabled hidden>
            Health type
          </option>
          {health.map((type) => (
            <option value={type.toLowerCase()}>{type}</option>
          ))}
        </select>
        <button
          style={style.submitInput}
          type="submit"
          className="submit-input"
        >
          Search recipes
        </button>
      </form>
    </div>
  );
};

export default Ingredients;
