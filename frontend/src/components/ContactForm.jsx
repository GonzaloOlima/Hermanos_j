import { useState } from "react";


//formulario controlado con useState

function ContactForm(){
    const[nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            nombre,
            email,
            mensaje
        });
    };

    return (
        <section className="contacto-form">
            <h2>Contacto</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <textarea
                    placeholder="Mensaje"
                    value={mensaje}
                    onChange={(event) => setMensaje(event.target.value)}
                />

                <button type="submit" className="boton">
                    Enviar
                </button>
            </form>
        </section>
    );
}







export default ContactForm;