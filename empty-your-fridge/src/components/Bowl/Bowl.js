import React from "react";
import { bowlStyles as bowl } from "./styles/BowlStyles";

const Bowl = () => {
  return (
    <div style={bowl.bowlContainer}>
      <ul style={bowl.bowlList}>
        <li>Ham</li>
        <li>Cheese</li>
        <li>Lettuce</li>
      </ul>
    </div>
  );
};

export default Bowl;
