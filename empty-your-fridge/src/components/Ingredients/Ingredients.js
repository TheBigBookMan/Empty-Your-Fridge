import React, { useState } from "react";
import { cuisines, meals, health } from "../../utils/types";
import "./styles/Ingredients.css";
import { ingredientsStyles as style } from "./styles/IngredientsStyles";
import apiQuery from "../../utils/API";

const Ingredients = ({ setIngredientsArr, ingredientsArr }) => {
  const [newIngredientInput, setNewIngredientInput] = useState("");
  const [cuisineSelection, setCuisineSelection] = useState("");
  const [mealSelection, setMealSelection] = useState("");
  const [healthSelection, setHealthSelection] = useState("");

  //TODO  get props of the array that holds the values of the cuisine/meal/health type and add the values from the user selection into it

  const createApiCall = (e) => {
    // ? need to make the api call like this with the queries so need if/else statements
    //? https://api.edamam.com/api/recipes/v2?type=public&q=lettuce%chicken%tomato%cheese&app_id=215db5b9&app_key=3825b049c21e45afc20c029947cc4427&health=alcohol-free&cuisineType=British&mealType=Lunch

    e.preventDefault();

    const ingredientSelection = [ingredientsArr[0]];
    if (ingredientsArr.length < 1) {
      return;
    } else {
      for (let i = 1; i < ingredientsArr.length; i++) {
        ingredientSelection.push(`%${ingredientsArr[i]}`);
      }
    }

    console.log(
      ingredientSelection,
      healthSelection,
      cuisineSelection,
      mealSelection
    );
    apiQuery(
      ingredientSelection.join(""),
      healthSelection,
      cuisineSelection,
      mealSelection
    );
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setIngredientsArr([...ingredientsArr, newIngredientInput.toLowerCase()]);
    setNewIngredientInput("");
  };

  //! NEED TO MAKE SURE THAT USERS CANT INPUT EMPTY ""
  const handleIngredientInput = (e) => {
    const { target } = e;
    const inputValue = target.value;

    setNewIngredientInput(inputValue);
  };

  //TODO make sure they cant select the default
  const changeCuisine = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setCuisineSelection(selectValue);
  };
  //TODO make sure they cant select the default
  const changeMeal = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setMealSelection(selectValue);
  };
  //TODO make sure they cant select the default
  const changeHealth = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setHealthSelection(selectValue);
  };

  return (
    <div style={style.ingredientsContainer}>
      <h3>
        Type in the ingredient and click "Add" to enter your ingredient to the
        list. When ready, click on "Search Recipes" to view all the yummy
        recipes that match your criteria!
      </h3>
      <form style={style.formContainer}>
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

        <select style={style.cuisineInput} onChange={changeCuisine}>
          <option
            value="Cuisine type"
            defaultValue="Cuisine type"
            disabled
            hidden
          >
            Cuisine type
          </option>
          {cuisines.map((cuisine) => (
            <option value={cuisine.toLowerCase()}>{cuisine}</option>
          ))}
        </select>

        <select style={style.mealInput} onChange={changeMeal}>
          <option value="Meal type" defaultValue="Meal type" disabled hidden>
            Meal type
          </option>
          {meals.map((meal) => (
            <option value={meal.toLowerCase()}>{meal}</option>
          ))}
        </select>

        <select style={style.healthType} onChange={changeHealth}>
          <option
            value="Health type"
            defaultValue="Health type"
            disabled
            hidden
          >
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
          onClick={createApiCall}
        >
          Search recipes
        </button>
      </form>
    </div>
  );
};

export default Ingredients;
