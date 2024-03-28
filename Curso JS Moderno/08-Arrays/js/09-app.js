const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
]


//Forma normal
for(let i = 0; i < carrito.length; i++ ){
    console.log( `${ carrito[i].nombre } ${carrito[i].precio} ` )
}

//Usando for each
carrito.forEach( function(producto) {
    console.log( `${ producto.nombre } ${producto.precio} ` )
})