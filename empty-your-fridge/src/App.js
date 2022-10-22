import "./styles/App.css";
import { useState } from "react";
import Ingredients from "./components/Ingredients/Ingredients";
import Bowl from "./components/Bowl/Bowl";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";
import History from "./components/History/History";

function App() {
  const [ingredientsArr, setIngredientsArr] = useState([]);

  // const userAddIngredient = (addedIngredient) => {
  //   setIngredientsArr([...ingredientsArr, addedIngredient]);
  // };

  return (
    <div>
      <header className="App-header">
        <h1>Empty Your Fridge</h1>
      </header>
      <body className="container">
        <Ingredients
          setIngredientsArr={setIngredientsArr}
          ingredientsArr={ingredientsArr}
        />
        <div className="middle-container">
          <Bowl />
          <Recipes />
        </div>
        <div className="right-container">
          <Favourites />
          <History />
        </div>
      </body>
    </div>
  );
}

export default App;
