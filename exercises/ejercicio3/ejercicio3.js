/*let totalCompra=0;
let comprando = true;
let contProductos = 0;
let conversionPrecio= 0;

while (comprando) {

    let respuesta = confirm("¿Desea agregar un producto al carrito?")
    
    if(respuesta){
        console.log("producto agregado exitosamente.")
        let precioProducto = prompt("Ingrese el precio del producto")
        conversionPrecio = parseFloat(precioProducto)
        if(!isNaN(conversionPrecio)){
            totalCompra += conversionPrecio
        }else{
            alert("Por favor, ingrese un número válido.")
        }
        contProductos ++
        
    }else{
        alert("Gracias por visitar nuestro sitio.")
        comprando = false
    }
}

alert(`${contProductos} agregados al carrito, valor ${totalCompra}`)*/

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
