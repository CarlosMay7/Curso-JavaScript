const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
]


 //Crea uno nuevo
const nuevoArray = carrito.map( function(producto) {
    return  `${ producto.nombre } ${producto.precio} `;
 })
 
carrito.forEach( function(producto) {
    console.log(`${ producto.nombre } ${producto.precio} `);
})
 
console.log(nuevoArray);
