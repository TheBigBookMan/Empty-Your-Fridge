import "./styles/App.css";
import { useState } from "react";
import { IngredientProvider } from "./utils/IngredientsContext";
import Ingredients from "./components/Ingredients/Ingredients";
import Bowl from "./components/Bowl/Bowl";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";

function App() {
  // ! can probably delete the usestate for ingredients because now in global state
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [recipesInfoArr, setRecipesInfoArr] = useState([]);

  //TODO ingredientsArr needs to be passed into the Recipes component where it can be added to local storage and searched in the fetch call

  // TODO Create a state array that holds the selection criteria of cuisine, meal, health and pass props into ingredients to get values
  //TODO and then into recipes so can api call

  return (
    <div>
      <header className="App-header">
        <h1>Empty Your Fridge</h1>
      </header>
      <main className="container">
        <IngredientProvider>
          <Ingredients
            setIngredientsArr={setIngredientsArr}
            ingredientsArr={ingredientsArr}
            recipesInfoArr={recipesInfoArr}
            setRecipesInfoArr={setRecipesInfoArr}
          />
          <div className="middle-container">
            <Bowl
              ingredientsArr={ingredientsArr}
              setIngredientsArr={setIngredientsArr}
            />
            <Recipes recipesInfoArr={recipesInfoArr} />
          </div>
          <div className="right-container">
            <Favourites />
          </div>
        </IngredientProvider>
      </main>
    </div>
  );
}

export default App;
