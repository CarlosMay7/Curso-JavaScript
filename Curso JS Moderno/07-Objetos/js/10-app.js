const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
}

const medidas = {
    peso : '1kg',
    medida: '7m'
}

const resultado = Object.assign(producto, medidas);

//Los ... toman una copia del objeto y la asignan dentro del nuevo
const resultadoSpread = {...producto, ...medidas};