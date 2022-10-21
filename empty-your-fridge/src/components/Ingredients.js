// var api_id = '215db5b9'
// var api_key = '3825b049c21e45afc20c029947cc4427'

// apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryIngredients}&app_id=${api_id}&app_key=${api_key}${health}${cuisine}${meal}`
import React from "react";
import { cuisines, meals, health } from "../utils/types";
import "../styles/Ingredients.css";
import { ingredientsStyles as style } from "../styles/Ingredients";

const Ingredients = () => {
  return (
    <div style={style.ingredientsContainer}>
      <h3>
        Type in ingredients you have laying about, one by one to then receive a
        list of yummy recipes that you can make with them. It's time to empty
        your fridge!
      </h3>
      <form style={style.formContainer}>
        <input
          type="text"
          style={style.ingredientInput}
          placeholder="Ingredients"
        />
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
