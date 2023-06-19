const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>HOME");
});

app.get("/1", (req, res) => {
  res.send("<h1>DETAIL PRODUCT");
});

app.get("/2", (req, res) => {
  res.send("<h1>REGISTER");
});

app.get("/3", (req, res) => {
  res.send("<h1>LOGIN");
});

app.get("/4", (req, res) => {
  res.send("<h1>CARRITO");
});

app.listen(PORT, () => {
  console.log(`Working at http://localhost:3000 port:${PORT}`);
});
