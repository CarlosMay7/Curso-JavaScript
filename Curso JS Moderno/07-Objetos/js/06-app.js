const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true,
    info: {
        peso: '2kg', 
        medida: '1m',
        fabricacion: {
            pais: 'México'
        }
    }
}

//Destructuring de objetos complejos
const { nombre, info: { fabricacion: {pais} } } = producto;