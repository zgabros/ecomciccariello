import ItemListContainer from "./ItemListContainer";

function Home() {
  let greetings = "la tienda.";

  return (
    <div className="App">
      <ItemListContainer greetings={greetings} />
    </div>
  );
}

export default Home;
