for(let i =0; i<10; i++) {
    if(i === 5) {
        console.log('CINCO');
        // break;
        continue;
    }

    console.log(`Número ${i}`);
}


const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 700, descuento: true},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
]

for( let i = 0; i<carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`${carrito[i].nombre} con descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}