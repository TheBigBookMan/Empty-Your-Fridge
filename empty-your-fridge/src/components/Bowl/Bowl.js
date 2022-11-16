import React from "react";
import { useIngredientContext } from "../../utils/IngredientsContext";
import { AiOutlineClose } from "react-icons/ai";

//TODO need to make the X buttons highlight red on hover and then onClick will remove the ingredients from the ingredients arr

// TODO change the fontawesome icon into the react icons

const Bowl = () => {
  const { ingredients, removeIngredient } = useIngredientContext();
  return (
    <div className="flex flex-col gap-2 border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-2">
      <h1 className="text-center font-bold text-lg">Ingredient Bowl</h1>
      {ingredients.length === 0 ? (
        <p>Add in ingredients above to be added to the ingredient bowl.</p>
      ) : (
        <ul className="flex flex-row flex-wrap w-full gap-5  items-center justify-around">
          {ingredients.map((ingredient) => (
            <li
              key={ingredient}
              value={ingredient}
              className="flex flex-col items-center"
            >
              <p className="text-indigo-600">{ingredient.toLowerCase()}</p>{" "}
              <AiOutlineClose
                className="hover:cursor-pointer hover:scale-125 hover:rotate-180 transition-all"
                onClick={() => removeIngredient(ingredient)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bowl;
