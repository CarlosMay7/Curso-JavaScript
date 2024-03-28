// function *crearGenerador() {
//     yield 1;
//     yield 'May';
//     yield 3+3;
//     yield true;
// }

// const iterador = crearGenerador();

// iterador.next();
// iterador.next().value;


//Generador para carrito de compras

function *generadorCarrito(carrito) {
    for(let i = 0; i<carrito.lenght; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto1', 'Producto2', 'Producto3'];

const iterador = generadorCarrito(carrito);


iterador.next();
iterador.next();
iterador.next();
iterador.next();