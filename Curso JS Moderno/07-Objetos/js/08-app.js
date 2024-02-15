"use strict"; 

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
}

//No se puede agregar, eliminar o editar propiedades
Object.freeze(producto);