import React from "react";
import "./styles/Bowl.css";
import { bowlStyles as bowl } from "./styles/BowlStyles";

const Bowl = ({ ingredientsArr }) => {
  return (
    <div style={bowl.bowlContainer}>
      <ul style={bowl.bowlList}>
        {ingredientsArr.map((ingredient, index) => (
          <li style={bowl.ingredient} key={index}>
            <p style={bowl.ingredientName}>{ingredient.toLowerCase()}</p>{" "}
            <i class="fa-regular fa-circle-xmark"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bowl;
