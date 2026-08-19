import api from "../api/api";

// Products
export const getProducts = () => {
  return api.get("/products");
};

// Carts / Orders
export const getCarts = () => {
  return api.get("/carts");
};

// Users / Customers
export const getUsers = () => {
  return api.get("/users");
};

// Reviews
export const getReviews = () => {
  return api.get("/comments");
};