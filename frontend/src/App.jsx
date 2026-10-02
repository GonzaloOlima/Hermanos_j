import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h2>Bienvenidos a nuestra mueblería</h2>

        <ProductList />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default App;