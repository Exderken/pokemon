// const productos = require("../data/productos.json");
const db = require("../models/connection.js");
const nodemailer = require("nodemailer");

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

const contactoPost = (req, res) => {
// tomo informacion del formulario
let data=req.body
console.log(data)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.nombre,
    to: "cristoferstone18@gmail.com",
    subject: `Contacto - ${data.asunto}`,
    html: `<p>${data.mensaje}</p>`,
  };

  // envia el email
	transporter.sendMail(mailOptions,  (error, info) => {
    if (error) {
        console.log(error)
        res.status(500, error.message)
        res.status(500).render('contacto', {
            mensaje: `Ha ocurrido el siguiente error ${error.message}`,
            mostrar: true,
            clase: 'danger'
        })
    } else {
        console.log('E-mail enviado')
        res.status(200).render('contacto', {
            mensaje: "Mail enviado correctamente",
            mostrar: true,
            clase: 'success'
        })
    }
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
  contactoPost,
};
