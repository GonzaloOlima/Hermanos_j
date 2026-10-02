import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

// ProductList: pide los productos a la API y muestra una ProductCard por cada uno.
// Maneja tres estados: cargando, error y lista lista para mostrar.
function ProductList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se ejecuta una sola vez, cuando el componente aparece en pantalla
  useEffect(() => {
    fetch('/api/productos')
      .then((res) => {
        // Si el servidor responde con error (404, 500...), lo tratamos como fallo
        if (!res.ok) throw new Error('No se pudieron cargar los productos');
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      // finally se ejecuta siempre: termine bien o mal, deja de cargar
      .finally(() => setLoading(false));
  }, []);

  // Renderizado condicional: según el estado, mostramos un mensaje u otro
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (productos.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <section>
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagenURL={producto.imagenURL}
        />
      ))}
    </section>
  );
}

export default ProductList;