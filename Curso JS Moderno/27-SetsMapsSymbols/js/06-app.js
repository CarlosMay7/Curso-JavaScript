function crearIterador(carrito) {
    let indice = 0;
    return {
        siguiente: () => {
            const fin = (indice >= carrito.lenght);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }

        }
    }
}

const carrito = ['Producto1', 'Producto2', 'Producto3'];

const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());