import "./styles/App.css";
import { IngredientProvider } from "./utils/IngredientsContext";
import { RecipeProvider } from "./utils/RecipesContext";
import { FavouriteProvider } from "./utils/FavouritesContext";
import Ingredients from "./components/Ingredients/Ingredients";
import Bowl from "./components/Bowl/Bowl";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";

function App() {
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
          <RecipeProvider>
            <Ingredients />
            <FavouriteProvider>
              <div className="middle-container">
                <Bowl />

                <Recipes />
              </div>
              <div className="right-container">
                <Favourites />
              </div>
            </FavouriteProvider>
          </RecipeProvider>
        </IngredientProvider>
      </main>
    </div>
  );
}

export default App;
