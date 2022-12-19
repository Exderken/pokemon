// const productos = require("../data/productos.json");
const db = require("../models/connection.js");

const adminGet = (req, res) => {
  let sql = "SELECT * FROM productos";

  db.query(sql, (err, data) => {
    if (err) throw err;
    // console.log(data);

    res.render("admin", {
      titulo: "Panel de control",
      producto: data,
    });
  });
};

const agregarGet = (req, res) => {
  res.render("agregar-producto", {});
};

const editarGet = (req, res) => {
  res.render("editar-producto", {});
};

const loginGet = (req, res) => {
  res.render("login", {});
};

module.exports = {
  adminGet,
  loginGet,
  editarGet,
  agregarGet,
};
