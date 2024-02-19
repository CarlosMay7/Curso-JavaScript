const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes) => {
    if(mes === 'Enero') {
        console.log('Existe');
    }
});

const resultado = meses.includes('Enero');

//En arreglo de objetos
const existe = carr.some((producto) =>  producto.nombre === 'celular');

const existe2 = mese.some( mes => mes === 'Enero');