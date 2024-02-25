const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

//conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.c6xhvxs.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('base de datos conectada'))
    .catch(e => console.log(e))

//motor de plantillas
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.render("404", {
        titulo: "404",
        descripcion: "Titulo de la pagina"
})
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})

