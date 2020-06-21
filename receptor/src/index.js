let express = require('express')
let app = express()

console.log("Receptor Operativo. Saludos")

app.use(express.static('public'))

const PUERTO = process.env.PORT || 3000

app.listen(3000)