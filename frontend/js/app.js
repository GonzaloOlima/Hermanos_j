//Botón de favorito
const bton = document.querySelectorAll('.boton');

bton.forEach(function(bton){

    bton.addEventListener('click', function() {

        bton.classList.toggle('favorito');
    
        if(bton.classList.contains('favorito')){
            bton.textContent = '⭐ Quitar de Favoritos';
        } else {
            bton.textContent ='❤️ Añadir a Favoritos';
        }
    });
});

//Catálogo dinamico
const catalogoMuebles = [
    {
        id: 1,
        nombre: "Silla Nórdica",
        precio: 45000,
        imagenURL: "https://placehold.co/150"
    },
    {
        id: 2,
        nombre: "Mesa Ratona",
        precio: 32000,
        imagenURL: "https://placehold.co/150"
    },
    {
        id: 3,
        nombre: "Estantería Industrial",
        precio: 58000,
        imagenURL: "https://placehold.co/150"
    }
];

const productContainer = document.getElementById('product-container');

catalogoMuebles.forEach(function (producto) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const nombre = document.createElement('h3');
    nombre.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.textContent = `$${producto.precio}`;

    const img = document.createElement('img');
    img.src = producto.imagenURL;
    img.alt = producto.nombre;

    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(img);

    productContainer.appendChild(card);
});

// ==========================================
// 3. PREFERENCIAS Y LOCALSTORAGE ( Ejercicio 3)
// ==========================================

let preferenciasUsuario = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true, // (Opcional) Corregido a plural como sugería el ejemplo
};

// Corregido para coincidir con id="btn-guardar" e id="btn-cargar" del HTML
let btnGuardar = document.getElementById("btn-guardar");
let btnCargar = document.getElementById("btn-cargar");

btnGuardar.addEventListener("click", function () {
    let preferencias = JSON.stringify(preferenciasUsuario);
    localStorage.setItem("misPreferencias", preferencias);
    alert("Preferencias guardadas");
});

btnCargar.addEventListener("click", function () {
    let preferencias = localStorage.getItem("misPreferencias");
    let preferenciasRecuperadas = JSON.parse(preferencias);
    console.log(preferenciasRecuperadas);
});
