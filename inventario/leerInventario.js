const fs = require('fs');

fs.readFile('inventario.txt', 'utf8', (error, contenido) => {
    if (error) {
        console.log('Error al leer el inventario:', error);
        return;
    }

    console.log(contenido);
});