// categorias: 1:"COMPONENTS" - 2:"PC" - 3:"LAPTOP" - 4:"MONITOR"
const products = [
  {
    id: "1",
    company: "AMD",
    name: "Ryzen 7 5800X3D",
    price: 300,
    categoryId: "1",
    stock: 20,
    description: "AMD Ryzen 7 5800X3D CPU",
    img: "/assets/ryzen7.png",
  },
  {
    id: "2",
    company: "Asus",
    name: "ROG Zephyrus G15",
    price: 1427,
    categoryId: "3",
    stock: 15,
    description: "Asus ROG Zephyrus G15 Gaming Laptop",
    img: "/assets/rogG15.png",
  },
  {
    id: "3",
    company: "Intel",
    name: "NUC 13 Extreme",
    price: 1931,
    categoryId: "2",
    stock: 6,
    description: "Intel NUC 13 Extreme with Nvidia RTX 4070",
    img: "/assets/nuc13ex.png",
  },
  {
    id: "4",
    company: "Corsair",
    name: 'Xenon FLEX 45" OLED',
    price: 1999,
    categoryId: "4",
    stock: 21,
    description:
      "CORSAIR XENEON FLEX 45WQHD240 45-Inch OLED (3440 x1440), 240Hz Refresh Rate, Bendable Gaming Monitor",
    img: "/assets/xenon-flex.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.categoryId === categoryId));
    }, 100);
  });
};
