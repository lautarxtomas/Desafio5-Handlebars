const express = require('express')
const routerProduct = require('./src/routes/products') // --> 3° importo router
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs())

// establecemos el motor de plantilla a utilizar
app.set("view engine", "hbs")
// establecemos directorio donde se encuentran los archivos de plantilla
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/products', routerProduct)
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send(`Root`)
}) 







// Running server
const PORT = process.env.port || 8080

const server = app.listen(PORT, () => {
    console.log(`HTTP Server running on port ${server.address().port}`)
})

server.on("error", error => console.log(`Error on server ${error}`))