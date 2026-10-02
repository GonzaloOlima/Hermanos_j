// ProductCard: muestra la tarjeta de un producto.
// Recibe nombre, precio e imagenURL por props.
function ProductCard({ nombre, precio, imagenURL }) {
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
    </article>
  );
}

export default ProductCard;