import axios from "axios";

var api_id = "215db5b9";
var api_key = "3825b049c21e45afc20c029947cc4427";

const apiQuery = async (queryIngredients, health, cuisine, meal) => {
  // ? need to make the api call like this with the queries so need if/else statements
  //? https://api.edamam.com/api/recipes/v2?type=public&q=lettuce%chicken%tomato%cheese&app_id=215db5b9&app_key=3825b049c21e45afc20c029947cc4427&health=alcohol-free&cuisineType=British&mealType=Lunch

  let ingredientSelection = [queryIngredients[0]];
  if (queryIngredients.length < 1) {
    return;
  } else {
    for (let i = 1; i < queryIngredients.length; i++) {
      ingredientSelection.push(`%${queryIngredients[i]}`);
    }
  }
  ingredientSelection = ingredientSelection.join("");

  // TODO update the health variable to '&health={health}' and if no input then ""
  if (health === "" || health === "Any") {
    health = "";
  } else {
    health = `&health=${health}`;
  }
  console.log(health);
  // TODO update the cuisine variable to '&cuisineType={cuisine}' and if no input then ""

  // TODO update the meal variable to '&mealType={meal}' and if no input then ""

  var apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientSelection}&app_id=${api_id}&app_key=${api_key}${health}${cuisine}${meal}`;
  console.log(apiUrl);
  // const response = await axios.get(apiUrl);
  // console.log(response);
};

export default apiQuery;
