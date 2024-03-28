// Funciona por el hoisting, primero guarda las funciones y luego las ejecuta
obtenerCliente('Juan');

function obtenerCliente(nombre) {
    console.log(`El nombre es ${nombre}`);
}


// No funciona porque es como si primero se hiciera una variable sin valor y luego se le asigna la función
// obtenerCliente2('May');
// const obtenerCliente2 = function() {
//     console.log(`El nombre es ${nombre}`);
// }