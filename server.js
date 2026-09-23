const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('<h1>Bienvenido al servidor de Mueblería Jota</h1>');
    } else if (req.url == "/productos"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('<h2>Nuestro catalaogo de productos</h2>');
    } else if (req.url == "/contacto"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('<p>Contáctanos al 555-1234</p>');
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Pagina no encontrada");
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});