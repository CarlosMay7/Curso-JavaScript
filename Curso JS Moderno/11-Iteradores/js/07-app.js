const pendientes = ['Tarea', 'JS', 'Kinub'];

const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
]

//Itera sobre arreglos
for( let pendiente of pendientes) {
    console.log(pendiente);
}

for( let producto of carrito) {
    console.log(producto.nombre);
}