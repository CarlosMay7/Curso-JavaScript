const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

