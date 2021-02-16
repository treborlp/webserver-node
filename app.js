const http = require("http")

http.createServer((require, response) => {
    response.write("Dont make me cry");
    response.end();
}).listen(8080);

console.log("Escuchando en el puero:", 8080);