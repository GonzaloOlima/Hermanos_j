import { useState, useEffect } from 'react';

// ProductDetail: muestra el detalle de un producto, buscándolo por id en la API.
function ProductDetail({ id }) {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se vuelve a ejecutar si cambia el id
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/productos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Producto no encontrado');
        return res.json();
      })
      .then((data) => setProducto(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  // Renderizado condicional según el estado
  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <article>
      <img src={producto.imagenURL} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>
        {producto.precio !== undefined
          ? `$${producto.precio.toLocaleString('es-AR')}`
          : 'Consultar precio'}
      </p>
    </article>
  );
}

export default ProductDetail;