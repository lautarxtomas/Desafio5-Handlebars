const { Router } = require('express') // si exportamos el router va el require, sino {Router} = express
const routerProducts = Router() // 1° --> declaro router
const apiContainer = require ('../containers/apiContainer') 

// const express = require('express')
// const app = express()

// const { engine } = require('express-handlebars')

// app.engine('handlebars', engine())
// app.set('view engine', 'handlebars')
// app.set('views', '../../views/layouts')

const products = []
let api = new apiContainer(products)

routerProducts.get('/', (req, res) => {
    // res.send({productos: products});
    res.render('products', { products })
})

routerProducts.post('/', (req, res) => {
    api.addProduct(req, res);
})

routerProducts.get('/:id', (req, res) => {
    api.getProduct(req, res);
})

routerProducts.put('/:id', (req, res) => {
    api.modifyProduct(req, res);
})

routerProducts.delete('/:id', (req, res) => {
    api.deleteProduct(req, res);
})



module.exports = routerProducts // 2° --> exporto router (importo en server.js)