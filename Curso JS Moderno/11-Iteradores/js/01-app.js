for (let i = 0; i<10; i++) {
    console.log(i);
}

for (let i = 0; i<10; i++) {
    if(i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}

const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
]

for( let i = 0; i<carrito.length; i++) {
    console.log(carrito[i].nombre);
}