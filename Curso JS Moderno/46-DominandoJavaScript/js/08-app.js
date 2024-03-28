//window.self === self

self.onload = () => console.log('Listo');

window.nombre = 'May';

const producto = {

    mostrar() {
        console.log(`El nombre es ${self.nombre}`);
    }
}

producto.mostrar();