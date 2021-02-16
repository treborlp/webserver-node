const express = require("express")
const app = express();
const port = 8080

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/hola-mundo', (req, res) => {
    res.send("Bienvenido a Hola mundo");
});

app.get('*', (req, res) => {
    res.send('La pagina solicitada no fue encontrada');
});

app.listen(port, () => {
    console.log(`El servidor de ejemplo se encuentra corriendo en el puerto ${port}`);
})