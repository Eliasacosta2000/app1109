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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TECNOSHOP
        </a>
      </header>
    </div>
  );
}

export default App;
