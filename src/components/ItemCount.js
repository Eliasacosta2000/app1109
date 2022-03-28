import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.inintial);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  console.log("2 Se va a montar en pantalla el componente");
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
