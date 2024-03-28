console.log(sumar(1,2));
function sumar(valor1, valor2) {
    return valor1 + valor2;
}


//No funciona por el hoisting
//Primero se identifican todas las funciones y variables y luego se ejecutan, entonces como se accede antes de estar declarada no se ejecuta
sumar2();
const sumar2 = function() {
    console.log(2 + 2);
}
