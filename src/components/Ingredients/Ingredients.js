import React, { useState } from "react";
import { useIngredientContext } from "../../utils/IngredientsContext";
import { useRecipeContext } from "../../utils/RecipesContext";
import { cuisines, meals, health } from "../../utils/types";
import apiQuery from "../../utils/API";

const Ingredients = () => {
  const [newIngredientInput, setNewIngredientInput] = useState("");
  const [cuisineSelection, setCuisineSelection] = useState("");
  const [mealSelection, setMealSelection] = useState("");
  const [healthSelection, setHealthSelection] = useState("");

  const { ingredients, addIngredient } = useIngredientContext();
  const { recipes, setRecipes } = useRecipeContext();

  const createApiCall = async (e) => {
    e.preventDefault();
    let getRecipes = await apiQuery(
      ingredients,
      healthSelection,
      cuisineSelection,
      mealSelection
    );
    setRecipes(getRecipes);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    if (newIngredientInput === "") {
      return;
    } else if (ingredients.includes(newIngredientInput)) {
      return;
    } else {
      addIngredient(newIngredientInput.toLowerCase());
      setNewIngredientInput("");
    }
  };

  const handleIngredientInput = (e) => {
    const { target } = e;
    const inputValue = target.value;

    setNewIngredientInput(inputValue);
  };

  const changeCuisine = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setCuisineSelection(selectValue);
  };

  const changeMeal = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setMealSelection(selectValue);
  };

  const changeHealth = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setHealthSelection(selectValue);
  };

  return (
    <div className="flex flex-col gap-3 md:w-5/6 lg:w-3/6 border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-5">
      <h3>
        Type in the ingredient and click "Add" to enter your ingredient to the
        bowl. When ready, click on "Search Recipes" to view all the yummy
        recipes that match your criteria!
      </h3>
      <form className="flex flex-col gap-3 border-solid border-2 border-slate-200 rounded-lg shadow-md bg-slate-200  p-5 h-[300px]">
        <input
          className="p-1 h-[30px] rounded-lg"
          type="text"
          placeholder="Ingredients"
          onChange={handleIngredientInput}
          value={newIngredientInput}
        />
        <button
          onClick={handleInputChange}
          type="submit"
          className="bg-slate-100 rounded-lg h-[40px] text-lg w-3/6 hover:bg-slate-600 hover:text-zinc-100 transition-all"
        >
          <p className=" text-md">Add</p>
        </button>

        <select onChange={changeCuisine} className="h-[35px] rounded pl-1">
          <option
            value="Cuisine type"
            defaultValue="Cuisine type"
            disabled
            hidden
          >
            Cuisine type
          </option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine.toLowerCase()}>
              {cuisine}
            </option>
          ))}
        </select>

        <select onChange={changeMeal} className="h-[35px] rounded pl-1">
          <option value="Meal type" defaultValue="Meal type" disabled hidden>
            Meal Type
          </option>
          {meals.map((meal) => (
            <option key={meal} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </select>

        <select onChange={changeHealth} className="h-[35px] rounded pl-1">
          <option
            value="Health type"
            defaultValue="Health type"
            disabled
            hidden
          >
            Health Type
          </option>
          {health.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-indigo-300 rounded-lg h-[60px] text-lg font-bold hover:bg-indigo-500 hover:text-zinc-100 active:scale-90 transition-all"
          onClick={createApiCall}
        >
          Search Recipes
        </button>
      </form>
    </div>
  );
};

export default Ingredients;
