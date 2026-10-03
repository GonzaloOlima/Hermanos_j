import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProductList from './components/ProductList';

function App() {
  // Estado del carrito: array con los productos agregados
  const [carrito, setCarrito] = useState([]);

  // Agrega un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Navbar />

      <main>
        <h2>Bienvenidos a nuestra mueblería</h2>

        {/* Contador temporal, después va en el Navbar */}
        <p>Productos en el carrito: {carrito.length}</p>

        <ProductList onAgregar={agregarAlCarrito} />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default App;