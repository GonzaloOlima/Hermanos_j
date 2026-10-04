// ProductCard: muestra la tarjeta de un producto.
// Recibe nombre, precio, imagenURL y onAgregar (función) por props.
function ProductCard({ nombre, precio, imagenURL, onAgregar }) {
  return (
    <article className="product-card">
      <img src={imagenURL} alt={nombre} />
      <h3>{nombre}</h3>

      <p>
        {precio !== undefined
          ? `$${precio.toLocaleString('es-AR')}`
          : 'Consultar precio'}
      </p>

      <button className="boton" onClick={onAgregar}>Agregar al carrito</button>
    </article>
  );
}
export default ProductCard;