import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProductList from './components/ProductList';
import Carrito from './components/Carrito';

function App() {
  // Estado del carrito: array con los productos agregados
  const [carrito, setCarrito] = useState([]);

  // Agrega un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Elimina del carrito el producto que está en esa posición
  const eliminarDelCarrito = (indice) => {
    setCarrito(carrito.filter((_, i) => i !== indice));
  };

  return (
    <>
      <Navbar cantidad={carrito.length} />

      <main>
        <h2>Bienvenidos a nuestra mueblería</h2>

        <ProductList onAgregar={agregarAlCarrito} />

        <Carrito items={carrito} onEliminar={eliminarDelCarrito} />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default App;