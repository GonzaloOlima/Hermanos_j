// ProductCard: muestra la tarjeta de un producto.
// Recibe nombre, precio, imagenURL y onAgregar (función) por props.
function ProductCard({ nombre, precio, imagenURL, onAgregar }) {
  return (
    <article>
      <img src={imagenURL} alt={nombre} />
      <h3>{nombre}</h3>

      {/* Si el producto no tiene precio, muestra "Consultar precio" */}
      <p>
        {precio !== undefined
          ? `$${precio.toLocaleString('es-AR')}`
          : 'Consultar precio'}
      </p>

      {/* Al hacer clic se ejecuta la función que viene por props */}
      <button onClick={onAgregar}>Agregar al carrito</button>
    </article>
  );
}

export default ProductCard;