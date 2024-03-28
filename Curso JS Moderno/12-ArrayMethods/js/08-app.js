const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Arreglo con indices
const meses2 = [...meses, 'Agosto'];

const producto = {
    nombre: 'Disco Duro', 
    precio: 700
}

//Arreglo con objetos
const carrito2 = [...carrito, producto];