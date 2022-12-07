
const express = require('express')
const app = express()
const hbs = require("hbs")
const port = 3000
const pokemon = require("./data/pokedex.json")

app.set('view engine', 'hbs'); // indica que usaremos la plantilla "handlebars"
hbs.registerPartials(__dirname + '/views/partials'); // indicamos el directorio hacia los parciales

app.use(express.static("public"))

app.get('/', (req, res) => {
res.render("index",{
    pokemon:pokemon.pokemon
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})