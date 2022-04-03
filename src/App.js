import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const onAdd = (quantity) => {
    console.log(quantity);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <ItemListContainer greeting="Bienvenido a TECNOSHOP" />
        <ItemCount initial={1} stock={25} onAdd={onAdd} />
      </BrowserRouter>
      <p>2022 C</p>
    </div>
  );
}

export default App;
