const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 3000;
// const pokemon = require("./data/pokedex.json")
const productos = require("./data/products.json");

app.set("view engine", "hbs"); // indica que usaremos la plantilla "handlebars"
hbs.registerPartials(__dirname + "/views/partials"); // indicamos el directorio hacia los parciales

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Mi pagina web",
    producto: productos.products,
  });
});

app.get("/como-comprar", (req, res) => {
  res.render("como-comprar", {
    titulo: "como-comprar"});
});

app.get("/contacto", (req, res) => {
  res.render("contacto", {
    titulo: "contacto"
  });
});

app.get("/detalle-producto", (req, res) => {
  res.render("detalle-producto", {
    titulo: "detalle-producto"
  });
});

app.get("/sobre-nosotros", (req, res) => {
  res.render("sobre-nosotros", {
    titulo: "sobre-nosotros"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
