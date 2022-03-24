import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>TECNOSHOP</h2>
      <button>PRODUCTOS</button>
      <button>CONTACTO</button>
      <button>OFERTAS</button>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
