const productos = require("./data/productos.json");

const adminGet = (req, res) => {
  res.render("admin", {
    titulo: "Panel de control",
    producto: productos[0].data,
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

module.exports={
adminGet,
loginGet,
editarGet,
agregarGet

}