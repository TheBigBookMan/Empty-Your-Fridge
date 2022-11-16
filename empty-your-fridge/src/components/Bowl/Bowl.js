import React from "react";
import { useIngredientContext } from "../../utils/IngredientsContext";

//TODO need to make the X buttons highlight red on hover and then onClick will remove the ingredients from the ingredients arr

// TODO change the fontawesome icon into the react icons

const Bowl = () => {
  const { ingredients, removeIngredient } = useIngredientContext();
  return (
    <ul className="flex flex-row flex-wrap w-full gap-5 border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-2 items-center justify-around">
      {ingredients.map((ingredient) => (
        <li
          key={ingredient}
          value={ingredient}
          className="flex flex-col items-center"
        >
          <p className="text-indigo-600">{ingredient.toLowerCase()}</p>{" "}
          <i
            className="fa-regular fa-circle-xmark cross"
            onClick={() => removeIngredient(ingredient)}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default Bowl;
