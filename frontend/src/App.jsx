import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProductList from './components/ProductList';
import Carrito from './components/Carrito';

function App() {
  // Estado del carrito: array con los productos agregados
  const [carrito, setCarrito] = useState([]);
  const [vista, setVista] = useState('inicio'); // 'inicio' | 'carrito' | 'contacto'


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
      <Navbar items={carrito} onEliminar={eliminarDelCarrito} vista={vista} setVista={setVista} />

      <main>
        {vista === 'inicio' && (
          <>
            <h2>Bienvenidos a nuestra mueblería</h2>
            <ProductList onAgregar={agregarAlCarrito} />
          </>
        )}

        {vista === 'carrito' && (
          <Carrito items={carrito} onEliminar={eliminarDelCarrito} />
        )}

        {vista === 'contacto' && <ContactForm />}
      </main>

      <Footer />
    </>
  );
}

export default App;