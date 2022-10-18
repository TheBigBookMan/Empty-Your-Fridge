import "./styles/App.css";
import Ingredients from "./components/Ingredients";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Empty Your Fridge</h1>
      </header>
      <body className="container">
        <Ingredients />
      </body>
    </div>
  );
}

export default App;
