import express from "express";
import { products } from "./products.js";

const app = express();

app.get("/home", (req, res) => {
  res.send("<h1>Hola mundo!</h1>");
});

app.get("/products", (req, res) => {
  const { limit } = req.query;
  console.log(limit);
  let limitedProducts = products;
  if (limit) {
    limitedProducts = products.slice(0, +limit);
  }
  res.json(limitedProducts);
});
app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const prod = products.find((p) => p.id === parseInt(id));
  if (!prod) res.status(404).json({ msg: "Product not found" });
  else res.json(prod);
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server ok en puerto ${PORT}`));
