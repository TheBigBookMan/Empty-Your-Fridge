// var api_id = '215db5b9'
// var api_key = '3825b049c21e45afc20c029947cc4427'

// apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryIngredients}&app_id=${api_id}&app_key=${api_key}&diet=high-fiber${cuisine}${meal}`

import React from "react";

const Ingredients = () => {
  return (
    <div className="ingredients-container">
      <h3>
        Type in ingredients you have laying about, one by one to then receive a
        list of yummy recipes that you can make with them. It's time to empty
        your fridge!
      </h3>
    </div>
  );
};

export default Ingredients;
