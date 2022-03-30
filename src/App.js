import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";

function App() {
  const onAdd = (quantity) => {
    console.log(quantity);
  };

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a TECNOSHOP" />
      <ItemCount initial={1} stock={25} onAdd={onAdd} />
    </div>
  );
}

export default App;
