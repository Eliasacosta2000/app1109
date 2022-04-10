const products = [
  {
    id: 1,
    name: "Ryzen 5 3600",
    price: 42000,
    category: "Procesador",
    stock: 30,
    description: "descripcion del Ryzen 5 3600",
  },
  {
    id: 2,
    name: "Motherboard Gigabyte A320M-H AM4",
    price: 9000,
    category: "Motherboard",
    stock: 50,
    description: "descripcion de la motherboard",
  },
  {
    id: 3,
    name: "Memoria Ram Adata Xpg Gammix D20 8gb 3200 Mhz Ddr4 Black",
    price: 6000,
    category: "Memoria Ram",
    stock: 45,
    description: "descripcion de la memoria ram",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(id)));
    }, 2000);
  });
};
