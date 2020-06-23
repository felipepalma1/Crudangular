let express = require('express')
let app = express()

let rutaProducto = require('./rutas/producto')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)

    next()
    
})

app.use(express.static('public'))
app.use(rutaProducto)

app.use((req, res, next) => {
    res.status(404).send('Creemos que te perdiste')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})



console.log("Receptor Operativo. Saludos")

app.use(express.static('public'))

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => console.info(`Servidor se ha iniciado en ${PUERTO}`))