// var api_id = '215db5b9'
// var api_key = '3825b049c21e45afc20c029947cc4427'

// apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryIngredients}&app_id=${api_id}&app_key=${api_key}${health}${cuisine}${meal}`
import React from "react";
import { cuisines, meals, health } from "../utils/types";
import "../styles/Ingredients.css";

const Ingredients = () => {
  return (
    <div className="ingredients-container">
      <h3>
        Type in ingredients you have laying about, one by one to then receive a
        list of yummy recipes that you can make with them. It's time to empty
        your fridge!
      </h3>
      <form className="form-container">
        <input
          type="text"
          className="ingredient-input"
          placeholder="Ingredients"
        />
        <select className="cuisine-input">
          <option value="" selected disabled hidden>
            Cuisine type
          </option>
          {cuisines.map((cuisine) => (
            <option value={cuisine.toLowerCase()}>{cuisine}</option>
          ))}
        </select>
        <select className="meal-input">
          <option value="" selected disabled hidden>
            Meal type
          </option>
          {meals.map((meal) => (
            <option value={meal.toLowerCase()}>{meal}</option>
          ))}
        </select>
        <select className="health-type">
          <option value="" selected disabled hidden>
            Health type
          </option>
          {health.map((type) => (
            <option value={type.toLowerCase()}>{type}</option>
          ))}
        </select>
        <button type="submit" className="submit-input">
          Search recipes
        </button>
      </form>
    </div>
  );
};

export default Ingredients;
