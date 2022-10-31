import React from "react";
import "./styles/Bowl.css";
import { bowlStyles as bowl } from "./styles/BowlStyles";

//TODO need to make the X buttons highlight red on hover and then onClick will remove the ingredients from the ingredients arr

const Bowl = ({ ingredientsArr }) => {
  return (
    <div style={bowl.bowlContainer}>
      <ul style={bowl.bowlList}>
        {ingredientsArr.map((ingredient) => (
          <li style={bowl.ingredient} key={ingredient}>
            <p style={bowl.ingredientName}>{ingredient.toLowerCase()}</p>{" "}
            <i className="fa-regular fa-circle-xmark"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bowl;
