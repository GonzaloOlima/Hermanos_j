function aplicarDescuento(p, pd) 
{
    let descuento = (p * pd) / 100;
    return p - descuento;
}

var precioSofa=80000
var precioMesa=20000

var precioFinalMesa=aplicarDescuento(precioMesa,10);
var precioFinalSofa=aplicarDescuento(precioSofa,25);

console.log("Precio Original De la mesa: "+precioMesa+". descuento del 10% . Precio Final Mesa: "+precioFinalMesa);
console.log("Precio Original Del Sofa: "+precioSofa+". descuento del 25% . Precio Final Mesa: "+precioFinalSofa);
