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