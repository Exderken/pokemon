const express = require("express");
const req = require("express/lib/request");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = 3000;
// const pokemon = require("./data/pokedex.json")
const productos = require("./data/productos.json");

app.set("view engine", "hbs"); // indica que usaremos la plantilla "handlebars"
app.set("views",[
path.join("./views/front"),
path.join("./views/back"),
path.join("./views")
])

hbs.registerPartials(__dirname + "/views/partials"); // indicamos el directorio hacia los parciales

app.use(express.static("public"));
// front
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Mi pagina web",
    producto: productos[0].data,
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

//back
app.get("/admin",(req,res)=>{
  res.render("admin",{
    titulo:"Panel de control",
    producto: productos[0].data
  })
})

app.get("/agregar-producto",(req,res)=>{
  res.render("agregar-producto",{

  })
})


app.get("/editar-producto",(req,res)=>{
  res.render("editar-producto",{

  })
})

app.get("/login",(req,res)=>{
  res.render("login",{

  })
})

app.use((req,res,next)=>{
  res.status(404).render("404",{
    titulo:"404 - No encontrado"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
