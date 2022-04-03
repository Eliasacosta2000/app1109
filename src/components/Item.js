const Item = ({ product }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{product.name}</h2>
      </header>
      <picture>
        <img src={product.img} alt={product.name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${product.price}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={"/item/${product.id}"} className="option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
