import React from "react";
import { useIngredientContext } from "../../utils/IngredientsContext";
import "./styles/Bowl.css";
import { bowlStyles as bowl } from "./styles/BowlStyles";

//TODO need to make the X buttons highlight red on hover and then onClick will remove the ingredients from the ingredients arr

const Bowl = () => {
  const { ingredients, removeIngredient } = useIngredientContext();
  return (
    <div style={bowl.bowlContainer}>
      <ul style={bowl.bowlList}>
        {ingredients.map((ingredient) => (
          <li style={bowl.ingredient} key={ingredient} value={ingredient}>
            <p style={bowl.ingredientName}>{ingredient.toLowerCase()}</p>{" "}
            <i
              className="fa-regular fa-circle-xmark cross"
              onClick={() => removeIngredient(ingredient)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bowl;
