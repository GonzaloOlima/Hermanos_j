// Navbar: barra superior con el título y el contador del carrito.
// Recibe cantidad (número de productos en el carrito) por props.
import { useState } from 'react';
import Carrito from './Carrito';

// Navbar: barra superior con el título, navegación y el carrito desplegable.
// Recibe items (array del carrito) y onEliminar (función) por props.
function Navbar({ items, onEliminar, vista, setVista }) {
    const total = items.reduce((acc, item) => acc + item.precio, 0);

    return (
    <header>
        <nav>
        <h1>Mueblería Hermanos Jota</h1>
        <ul>
            <li><button className="link-nav" onClick={() => setVista('inicio')}>Inicio</button></li>
            <li><button className="link-nav" onClick={() => setVista('inicio')}>Productos</button></li>
            <li><button className="link-nav" onClick={() => setVista('contacto')}>Contacto</button></li>
        </ul>
        <button
            className="boton carrito-boton"
            onClick={() => setVista('carrito')}
        >
            🛒 Carrito ({items.length}) — ${total.toLocaleString('es-AR')}
        </button>
        </nav>
    </header>
    );
}

export default Navbar;