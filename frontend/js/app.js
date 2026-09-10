
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
