document.addEventListener('DOMContentLoaded', function (){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 18; i++ ){
        const imagen = document.createElement('picture');
        imagen.innerHTML =`
            <source srcset="build/img/${i}.avif" type="image/avif"> 
            <source srcset="build/img/${i}.webp" type="image/webp"> 
            <img loading="lazy" width="200" height="300" src="build/img/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria. appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML =`
        <source srcset="build/img/${id}.avif" type="image/avif"> 
        <source srcset="build/img/${id}.webp" type="image/webp"> 
        <img loading="lazy" width="200" height="300" src="build/img/${id}.jpg" alt="imagen galeria">
    `;

    //crea el overlay con la imagen
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body'); // remover clase asi puedo dar scroll cuando cierro imagen de galeria
        overlay.remove();
    }// cerrar imagen tocando overlay

    //Boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body'); // remover clase asi puedo dar scroll cuando cierro imagen de galeria
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    //Añadirlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

