import { useState, useEffect } from "react";
import { getProductById } from "../services/asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((prod) => {
      setProduct(prod);
    });
  }, []);

  return (
    <div>
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
