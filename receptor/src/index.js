let express = require('express')

let app = express()

let productoRuta = require('./routes/producto')

app.use(productoRuta);
app.use(express.static('public'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info("Servidor Corriendo en ", PORT))