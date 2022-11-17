import "./styles/App.css";
import { IngredientProvider } from "./utils/IngredientsContext";
import { RecipeProvider } from "./utils/RecipesContext";
import { FavouriteProvider } from "./utils/FavouritesContext";
import Ingredients from "./components/Ingredients/Ingredients";
import Bowl from "./components/Bowl/Bowl";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";

//TODO Create a cool logo for it just for extra style

function App() {
  return (
    <div className="font-Montserrat">
      <header className=" flex flex-row justify-center items-center">
        <h1 className="font-bold text-4xl m-2">Empty Your Fridge</h1>
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-plate-kitchen-kiranshastry-lineal-kiranshastry.png" />
      </header>
      <main className="flex flex-col lg:flex-row gap-3 p-2 h-full">
        <IngredientProvider>
          <RecipeProvider>
            <FavouriteProvider>
              <div className="flex flex-col md:flex-col gap-3">
                <div className="flex flex-col gap-3 md:flex-row ">
                  <Ingredients />
                  <Bowl />
                </div>
                <Recipes />
              </div>
              <Favourites />
            </FavouriteProvider>
          </RecipeProvider>
        </IngredientProvider>
      </main>
    </div>
  );
}

export default App;
