import { Product } from "./_ts/interfaces/Product.interfaces";

export const API_URL = "https://fakestoreapi.com/products";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Teszt név 1",
    price: 105.2,
    description: "Leírás",
    category: "dummy",
    rating: { rate: 4.5 },
    image: "",
  },
  {
    id: 2,
    title: "Teszt név 2",
    price: 105.2,
    description: "Leírás",
    category: "dummy",
    rating: { rate: 4.5 },
    image: "",
  },
  {
    id: 3,
    title: "Teszt név 3",
    price: 105.2,
    description: "Leírás",
    category: "dummy",
    rating: { rate: 4.5 },
    image: "",
  },
];
