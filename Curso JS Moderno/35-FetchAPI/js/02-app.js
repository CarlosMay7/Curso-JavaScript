const cargarJSON = document.querySelector('#cargarJSON');
cargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleado.json')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            mostrarHTML(resultado);
        })
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>ID: ${id}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}