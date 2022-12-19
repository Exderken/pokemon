// const productos = require("../data/productos.json");
const db = require("../models/connection.js");

const indexGet = (req, res) => {
  let sql = "SELECT * FROM productos";

  db.query(sql, (err, data) => {
    if (err) throw err;
    // console.log(data);

    res.render("index", {
      titulo: "Mi pagina web",
      productos: data,
    });
  });
};

const comoComprarGet = (req, res) => {
  res.render("como-comprar", {
    titulo: "como-comprar",
  });
};

const contactoGet = (req, res) => {
  res.render("contacto", {
    titulo: "contacto",
  });
};

const detalleGet = (req, res) => {
  res.render("detalle-producto", {
    titulo: "detalle-producto",
  });
};

const nosotrosGet = (req, res) => {
  res.render("sobre-nosotros", {
    titulo: "sobre-nosotros",
  });
};

module.exports = {
  indexGet,
  detalleGet,
  contactoGet,
  nosotrosGet,
  comoComprarGet,
};
