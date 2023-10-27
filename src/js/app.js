document.addEventListener('DOMContentLoaded', function (){
    iniciarApp();
});

function iniciarApp(){
    mostrarUbicacion();
    
    // Añadir evento de clic al icono
    const iconLoc = document.querySelector('.icon-loc');
    iconLoc.addEventListener('click', function(){
        // Mostrar modal
        const modal = document.getElementById('mapModal');
        modal.style.display = "block";
    });

    // Cerrar modal cuando se hace clic en "x"
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function(){
        const modal = document.getElementById('mapModal');
        modal.style.display = "none";
    });
};

function mostrarUbicacion(){
    const ubi = document.createElement('div');
    ubi.innerHTML= `
    <iframe src="https://www.google.com/maps/embed?...">
    </iframe>`;
    document.getElementById('mapContainer').appendChild(ubi);
}

