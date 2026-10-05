import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

// ProductList: pide los productos a la API y muestra una ProductCard por cada uno.
// Maneja tres estados: cargando, error y lista lista para mostrar.

// Recibe onAgregar por props desde App
function ProductList({ onAgregar }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se ejecuta una sola vez, cuando el componente aparece en pantalla
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
      fetch(`${API_URL}/api/productos`)
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
    <section className='galeria-productos'>
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagenURL={producto.imagenURL}
          onAgregar={() => onAgregar(producto)}
        />
      ))}
    </section>
  );
}

export default ProductList;