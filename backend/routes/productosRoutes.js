const express = require('express'); //importa express
const productos = require('../data/productos'); //obtiene el array de productos.js


const router = express.Router(); //crea un router independiente para las rutas de productos


//Esta ruta devuelve el array completo en formato JSON.
// GET /api/productos
router.get('/', (req, res, next)=>{
    res.json(productos);
});


// GET /api/productos/:id
router.get('/:id',(req,res)=>{
    const id = Number(req.params.id)

    const producto = producto.find(producto => producto.id === id);

    if(!producto){
        const error = new Error("Producto no encontrado.");
        error.estatus = 404;

        return next(error);
    };

    res.json(producto);
});

module.exports = router;