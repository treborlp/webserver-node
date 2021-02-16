const express = require("express")
const app = express();
const port = 8080

//Handlebars busca en la carpeta views por defecto
app.set('view engine', 'hbs');
//Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("home"); //No es necesario colocar la extension hbs 
    //res.send("Hola mundo")
});

app.get('/hola-mundo', (req, res) => {
    res.send("Bienvenido a Hola mundo");
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`El servidor de ejemplo se encuentra corriendo en el puerto ${port}`);
})