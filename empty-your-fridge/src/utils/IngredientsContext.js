import React, { createContext, useContext, useState } from "react";
import { ingredientsStyles } from "../components/Ingredients/styles/IngredientsStyles";

const IngredientContext = createContext();

export const useIngredientContext = () => useContext(IngredientContext);

export const IngredientProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
};
