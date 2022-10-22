import React from "react";
import "./styles/Bowl.css";
import { bowlStyles as bowl } from "./styles/BowlStyles";

// need to import the state array from ingredients to then have list on on here

const Bowl = () => {
  return (
    <div style={bowl.bowlContainer}>
      <ul style={bowl.bowlList}>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>cheese</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>lettuce</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Hamchickencheesesam</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
        <li style={bowl.ingredient}>
          <p style={bowl.ingredientName}>Ham</p>{" "}
          <i class="fa-regular fa-circle-xmark"></i>
        </li>
      </ul>
    </div>
  );
};

export default Bowl;
