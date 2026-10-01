import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <Navbar /> 

      <main>
        <h2>Bienvenidos a nuestra mueblería</h2>

        <ContactForm />
      </main>

      <Footer />
    
    </>
  );
}

export default App
