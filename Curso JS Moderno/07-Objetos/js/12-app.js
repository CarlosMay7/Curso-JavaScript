//Object literal
const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

//Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2= new Producto('Tablet', 300);