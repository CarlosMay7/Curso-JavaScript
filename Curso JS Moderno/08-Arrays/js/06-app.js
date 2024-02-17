const carrito = [];

const producto = {
    nombre: 'Monitor', 
    precio: 7
}

const producto2 = {
    nombre: 'Celular', 
    precio: 50
}

//Copia el carrito y le agrega el producto al final
let resultado = [...carrito, producto];
resultado = [...resultado, producto]

//Lo agrega al principio
resultado = [producto2, ...resultado];