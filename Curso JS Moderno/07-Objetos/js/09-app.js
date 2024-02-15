"use strict"; 

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
}

//Permite editar las propiedades pero no agregar o eliminar
Object.seal(producto);