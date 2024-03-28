const abrir = document.querySelector('#abrir-pantalla-completa');
const cerrar = document.querySelector('#salir-pantalla-completa');

abrir.addEventListener('click', pantallaCompleta);
cerrar.addEventListener('click',cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}