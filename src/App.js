import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const [item, setItem] = useState(0);

  let greetings = "la tienda.";

  return (
    <div className="App">
      <NavBar item={item} />
      <ItemListContainer greetings={greetings} item={item} setItem={setItem} />
    </div>
  );
}

export default App;
