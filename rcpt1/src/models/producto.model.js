let mongoose = require('mongoose')

const servidor = 'cluster0-f3dv5.mongodb.net'
const basededatos = ' sample_airbnb.listingsAndReviews'
const user = 'aplicacion'
const pass = 'Junio.2020'

mongoose.connect(`mongodb://${user}:${pass}@${servidor}/${basededatos}`)

let EsquemaProducto = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Producto', EsquemaProducto)