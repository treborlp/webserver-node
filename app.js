require("dotenv").config()
const express = require("express")
const hbs = require('hbs');

const app = express();
const port = process.env.PORT

//Registro de parciales
hbs.registerPartials(__dirname + '/views/partials');

//Handlebars busca en la carpeta views por defecto
app.set('view engine', 'hbs');
//Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("home", {
        nombre: "Robert Alvarado",
        curso: "Node"
    }); //No es necesario colocar la extension hbs 
    //res.send("Hola mundo")
});

app.get('/generic', (req, res) => {
    res.render("generic", {
        nombre: "Robert Alvarado",
        curso: "Node"
    });
});

app.get('/elements', (req, res) => {
    res.render("elements", {
        nombre: "Robert Alvarado",
        curso: "Node"
    });
});



app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`El servidor de ejemplo se encuentra corriendo en el puerto ${port}`);
})