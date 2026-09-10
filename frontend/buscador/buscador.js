const formulario = document.querySelector("#user-search-form");
const inputUsuario = document.querySelector("#username");
const resultado = document.querySelector("#user-result");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    buscarUsuario(inputUsuario.value);
});

async function buscarUsuario(nombreUsuario) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?username=${nombreUsuario}`
        );

        const data = await response.json();

        if (data.length > 0) {
            resultado.innerHTML = `
                <h2>${data[0].name}</h2>
                <p>Email: ${data[0].email}</p>
                <p>Ciudad: ${data[0].address.city}</p>
            `;
        } else {
            resultado.innerHTML = "<p>Usuario no encontrado</p>";
        }
    } catch (error) {
        resultado.innerHTML = "<p>Usuario no encontrado</p>";
    }
}