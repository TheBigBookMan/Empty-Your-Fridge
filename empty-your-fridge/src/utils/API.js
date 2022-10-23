import axios from "axios";

var api_id = "215db5b9";
var api_key = "3825b049c21e45afc20c029947cc4427";

const ingredientCheck = (arr) => {
  let ingredientSelection = [arr[0]];
  if (arr.length < 1) {
    return;
  } else {
    for (let i = 1; i < arr.length; i++) {
      ingredientSelection.push(`%${arr[i]}`);
    }
  }
  return ingredientSelection.join("");
};

const healthCheck = (input) => {
  if (input === "" || input === "any" || input === "health type") {
    return "";
  } else {
    return `&health=${input}`;
  }
};

const cuisineCheck = (input) => {
  if (input === "" || input === "any" || input === "select cuisine") {
    return "";
  } else if (input.split(" ").length > 1) {
    return `&cuisineType=${input.split(" ").join("%20")}`;
  } else {
    return `&cuisineType=${input}`;
  }
};

const mealCheck = (input) => {
  if (input === "" || input === "any" || input === "meal type") {
    return "";
  } else {
    return `&mealType=${input}`;
  }
};

const apiQuery = async (queryIngredients, health, cuisine, meal) => {
  // ? need to make the api call like this with the queries so need if/else statements
  //? https://api.edamam.com/api/recipes/v2?type=public&q=lettuce%chicken%tomato%cheese&app_id=215db5b9&app_key=3825b049c21e45afc20c029947cc4427&health=alcohol-free&cuisineType=British&mealType=Lunch

  var apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientCheck(
    queryIngredients
  )}&app_id=${api_id}&app_key=${api_key}${healthCheck(health)}${cuisineCheck(
    cuisine
  )}${mealCheck(meal)}`;
  console.log(apiUrl);
  // const response = await axios.get(apiUrl);
  // console.log(response);
};

export default apiQuery;
