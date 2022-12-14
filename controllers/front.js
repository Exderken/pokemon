const productos = require("./data/productos.json");

const indexGet =  (req, res) => {
    res.render("index", {
      titulo: "Mi pagina web",
      producto: productos[0].data,
    });
  }

  const comoComprarGet =(req, res) => {
    res.render("como-comprar", {
      titulo: "como-comprar",
    });
  }


  const contactoGet = (req, res) => {
    res.render("contacto", {
      titulo: "contacto",
    });
  }

  const detalleGet = (req, res) => {
    res.render("detalle-producto", {
      titulo: "detalle-producto",
    });
    }


    const nosotrosGet =(req, res) => {
    res.render("sobre-nosotros", {
      titulo: "sobre-nosotros",
    });
  }



  module.exports ={
indexGet,
detalleGet,
contactoGet,
nosotrosGet,
comoComprarGet

  }