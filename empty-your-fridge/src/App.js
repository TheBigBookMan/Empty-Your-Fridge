import "./styles/App.css";
import { IngredientProvider } from "./utils/IngredientsContext";
import { RecipeProvider } from "./utils/RecipesContext";
import { FavouriteProvider } from "./utils/FavouritesContext";
import Ingredients from "./components/Ingredients/Ingredients";
import Bowl from "./components/Bowl/Bowl";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";

function App() {
  return (
    <div className="font-Montserrat">
      <header className="text-center">
        <h1 className="font-bold text-3xl">Empty Your Fridge</h1>
      </header>
      <main className="flex flex-col gap-3 p-2 h-full">
        <IngredientProvider>
          <RecipeProvider>
            <FavouriteProvider>
              <div className="flex flex-col gap-3 md:flex-row ">
                <Ingredients />

                <Bowl />
              </div>
              <Recipes />

              <div className="">
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
