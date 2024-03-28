const carrito = [];

const producto = {
    nombre: 'Monitor', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

//Eliminar último elemento
carrito.pop()

//Eliminar el primer elemento
carrito.shift();

//Eliminar un elemento específico}
//Donde inicia y cuantos elementos se van a eliminar
carrito.splice(0, 3);
