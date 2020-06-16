/*Los lenguajes han evolucionado a través de las necesidades que internet presenta*/

let express = require('express')
let router = express.Router()

router.get('/producto', (req, res) => {
    res.send('Solicitud Producto')
})

router.get('/producto:nombre', (req, res) => {
    res.send('Solicitud Producto \n', req.params.nombre)
})


module.exports = router