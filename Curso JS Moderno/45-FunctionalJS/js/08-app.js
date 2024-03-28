const obtenerCliente = () => {
    const nombre = 'May';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();