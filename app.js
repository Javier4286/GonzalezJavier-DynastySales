const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>HOME");
});

app.get("/detalle-producto", (req, res) => {
  res.send("<h1>DETAIL PRODUCT");
});

app.get("/registrarme", (req, res) => {
  res.send("<h1>REGISTER");
});

app.get("/inicio-sesion", (req, res) => {
  res.send("<h1>LOGIN");
});

app.get("/carrito", (req, res) => {
  res.send("<h1>CARRITO");
});

app.listen(PORT, () => {
  console.log(`Working at http://localhost:3000 port:${PORT}`);
});
