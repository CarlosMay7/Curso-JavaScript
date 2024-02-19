const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
    if(mes === 'Abril') {
        console.log(`Encontrado en ${index}`);
    }
});

const index = meses.findIndex(mes => mes === 'Abril');

//Encuentra el primero que encuentra
const index2 = car.findIndex( producto => producto.precio === 100);