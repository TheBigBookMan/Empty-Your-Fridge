import React, { createContext, useContext, useState } from "react";
import { ingredientsStyles } from "../components/Ingredients/styles/IngredientsStyles";

const IngredientContext = createContext();

export const useIngredientContext = () => useContext(IngredientContext);

export const IngredientProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const removeIngredient = (input) => {
    const newIngredientList = ingredients.filter(
      (ingredient) => ingredient !== input
    );
    setIngredients(newIngredientList);
  };

  return (
    <IngredientContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientContext.Provider>
  );
};
