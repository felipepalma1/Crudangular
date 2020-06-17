/*Los lenguajes han evolucionado a través de las necesidades que internet presenta*/

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




module.exports = router