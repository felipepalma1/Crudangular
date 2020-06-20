let express = require('express')

let app = express()
let productoRuta = require('./routes/producto')

let ruta = require('path')

let bodyParser = require('body-parser')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
}) //next es un puntero hacia la siguiente función en flujo

app.use(productoRuta);
app.use(express.static('public'))

//Manipulador de 404 - Recurso no encontrado
app.use((req, res, next) => {
    res.status(404).send('Creo que estás perdido')
})

//Manipulador para errores 500
app.use((req,res,next)=> {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '..public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info("Servidor Corriendo en ", PORT))