// Navbar: barra superior con el título y el contador del carrito.
// Recibe cantidad (número de productos en el carrito) por props.
function Navbar({ cantidad }){
    return(
        <nav>
            <h1>MueblerÃa Hermanos J</h1> {/* dejá tu línea original */}
            <p>Carrito: {cantidad}</p>
        </nav>
    );

}

export default Navbar;