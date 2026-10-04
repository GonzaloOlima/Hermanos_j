// Carrito: muestra los productos agregados y permite eliminarlos.
// Recibe items (array) y onEliminar (función) por props.
function Carrito({ items, onEliminar }) {
  // Renderizado condicional: mensaje si el carrito está vacío
  if (items.length === 0) return <p>El carrito está vacío.</p>;

  return (
    <section>
      <h2>Carrito</h2>
      <ul>
        {items.map((item, index) => (
          // La key combina id e índice porque un mismo producto puede repetirse
          <li key={`${item.id}-${index}`}>
            {item.nombre}
            <button onClick={() => onEliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Carrito;