const pendientes = ['Tarea', 'JS', 'Kinub'];

pendientes.forEach( (pendiente, index) => {
    console.log(pendiente, index);
});


const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
]

carrito.forEach( (producto) => {
    console.log(producto.nombre);
});

const nuevoCarrito = carrito.map((producto) => producto.nombre);

console.log(nuevoCarrito);