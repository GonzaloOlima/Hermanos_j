async function cargarGaleria() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos?_limit=12"
        );

        const fotos = await response.json();

        const galeria = document.querySelector("#photo-gallery");

        fotos.forEach(function (foto) {
            const imagen = document.createElement("img");

            imagen.src = foto.thumbnailUrl;
            imagen.alt = foto.title;

            imagen.addEventListener("click", function () {
                alert(foto.title);
            });

            galeria.appendChild(imagen);
        });

    } catch (error) {
        console.error("Error al cargar las fotos:", error);
    }
}

cargarGaleria();