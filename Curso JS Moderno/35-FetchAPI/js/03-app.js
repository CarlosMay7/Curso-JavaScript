const cargarJSONArray = document.querySelector('#cargarJSONArray');
cargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    
    fetch('data/empleados.json')
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado));
}