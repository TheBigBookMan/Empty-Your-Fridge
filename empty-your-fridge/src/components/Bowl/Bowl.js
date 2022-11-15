import React from "react";
import { useIngredientContext } from "../../utils/IngredientsContext";

//TODO need to make the X buttons highlight red on hover and then onClick will remove the ingredients from the ingredients arr

const Bowl = () => {
  const { ingredients, removeIngredient } = useIngredientContext();
  return (
    <div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient} value={ingredient}>
            <p>{ingredient.toLowerCase()}</p>{" "}
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
