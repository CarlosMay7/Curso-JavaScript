const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let total = 0;
carrito.foreach(producto => total+= producto.precio);

//Primero va la variable para guardar, luego solo se le pone + porque se va acumulando en la misma variable
let resultado = carrito.reduce((total, actual) => total + actual.precio, 0);