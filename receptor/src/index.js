let express = require('express')
let app = express()

let rutaProducto = require('./rutas/producto')

app.use(express.static('public'))
app.use(rutaProducto)

console.log("Receptor Operativo. Saludos")

app.use(express.static('public'))

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => console.info(`Servidor se ha iniciado en ${PUERTO}`))