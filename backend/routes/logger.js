//middleware logger
const logger = (req, res, next) => {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-AR');
    const hora = ahora.toLocaleTimeString('es-AR');

    console.log(`${fecha} ${hora}   [${req.method}] ${req.originalUrl}`);

    next();
};

module.exports = logger;