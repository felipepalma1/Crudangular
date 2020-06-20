/*Los lenguajes han evolucionado a través de las necesidades que internet presenta*/


let ProductoModel = require('../models/producto.model')
let express = require('express')


let router = express.Router()

/*QueryString => localhost:3000/producto?nombre=leche&marca=soprole*/
router.get('/producto', (req, res) => {
    
    console.log("Producto")

    if(req.query.nombre){
        res.send(`Se ha solicitado un producto ${req.query.nombre}`)
    }
    else{
        res.send(`Se ha solicitado un producto`)
    }

})


/*localhost:3000/producto/leche*/
router.get('/producto/:nombre', (req, res) => {
    res.send(`Se ha solicitado ${req.params.nombre}`)
    console.log("/producto:nombre");
})

router.get('/producto/error', (req, res) => {
    throw new Error('Esto es un error forzado. Esto será reportado');
})


router.post('/producto', (req, res) => {
    if (!req.body){
        return res.status(400).send('Solicitud está perdida')
    }

    // let producto = {
    //     name: 'primer nombre ultimo nombre',
    // }

    let model = new ProductoModel(req.body)
    model.save()
        .then(documento => {
            if (!documento || documento.lenght === 0){
                return res.status(500).send(documento)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })

})

module.exports = router