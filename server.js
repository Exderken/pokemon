const express = require("express");
const req = require("express/lib/request");
const app = express();
const hbs = require("hbs");
const path = require("path");
const rutasFront= require("./routes/front")
const rutasBack= require("./routes/back")
const port = 3000;
require("./views/helpers/helpers.js")
// const pokemon = require("./data/pokedex.json")


app.set("view engine", "hbs"); // indica que usaremos la plantilla "handlebars"
app.set("views",[
path.join("./views/front"),
path.join("./views/back"),
path.join("./views")
])

hbs.registerPartials(__dirname + "/views/partials"); // indicamos el directorio hacia los parciales

app.use(express.static("public"));

app.use("/",rutasFront)
app.use("/",rutasBack)

app.use((req,res,next)=>{
  res.status(404).render("404",{
    titulo:"404 - No encontrado"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
