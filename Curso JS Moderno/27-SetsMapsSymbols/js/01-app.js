const carrito = new Set();

carrito.add('Camisa');
carrito.add('camisa');

carrito.size;
carrito.has('Camisa');
carrito.delete('Camisa');
carrito.clear();

carrito.forEach(producto => console.log(producto));
carrito.forEach((producto, index, pertenece) => {
    
    console.log(producto);
    //Con el index se da el mismo valor que su valor

    //Devuelve todo el set completo
    console.log(pertenece); 
})


const numeros = [10, 20, 10];
const noDuplicados = new Set(numeros);