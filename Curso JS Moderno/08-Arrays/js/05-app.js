const carrito = [];

const producto = {
    nombre: 'Monitor', 
    precio: 7
}

const producto2 = {
    nombre: 'Celular', 
    precio: 50
}

carrito.push(producto);
carrito.push(producto2);

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 70
}
carrito.unshift(producto3);
