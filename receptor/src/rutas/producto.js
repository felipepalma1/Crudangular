let express = require('express')
let enrutador = express.Router()

enrutador.get('/producto', (req, res) => {

    /*localhost:3000/producto/producto?nombre=jamon*/
    if (req.query.nombre) {
        res.send(`Se ha solicitado un -> ${req.query.nombre}`)
    }

    res.send('Se ha solicitado un producto')
})

enrutador.get('/producto/:nombre', (req, res) => {
    res.send(`Se ha solicitado ${req.params.nombre}`)
})

enrutador.get('/producto/error', (req, res) => {
    throw new Error('Esto es un error')
})

module.exports = enrutador