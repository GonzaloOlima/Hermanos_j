// ejercicio4.js — Generador de Lista de Productos

const cantidadProductos = Number(
    prompt("¿Cuántos productos desea agregar a la lista?")
  );
  
  for (let i = 1; i <= cantidadProductos; i++) {
    console.log(`Producto #${i} agregado`);
  }
  
  console.log(`Se han agregado ${cantidadProductos} productos a la lista.`);