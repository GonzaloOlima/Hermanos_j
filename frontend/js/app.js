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

