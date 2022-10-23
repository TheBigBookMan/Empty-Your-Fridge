import axios from "axios";

var api_id = "215db5b9";
var api_key = "3825b049c21e45afc20c029947cc4427";

const apiQuery = async (queryIngredients, health, cuisine, meal) => {
  var apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryIngredients}&app_id=${api_id}&app_key=${api_key}${health}${cuisine}${meal}`;
  console.log(apiUrl);
  // const response = await axios.get(apiUrl);
  // console.log(response);
};

export default apiQuery;
