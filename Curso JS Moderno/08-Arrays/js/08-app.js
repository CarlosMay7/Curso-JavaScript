const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponible: true
}

const {nombre} = producto;
const {precio, disponible} = producto;


const numeros = [10,20,30,40,50];

//Dependiendo del valor que necesitemos y no se quieran los demás, se van dejando espacios en blanco
const [ , , segundo, tercero ] = numeros;

//Si se quiere tomar unos y que los demás estén en su propio arreglo se usa el rest operator
const [ , , otroSegundo, ...nuevoTercero ] = numeros;

