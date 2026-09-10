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
