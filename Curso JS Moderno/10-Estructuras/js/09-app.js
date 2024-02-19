const autenticado = true;
const puedePagar = true;

console.log( autenticado && puedePagar ? 'Si autenticado' : 'No autenticado');
console.log( autenticado || puedePagar ? 'Si autenticado' : 'No autenticado');


const efectivo = 800;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {

    if(efectivo > totalPagar) {
        console.log('Pagaste con efectivo');
    } else {
        console.log('Otro metodo');
    }

} else {
    console.log('Insuficiente');
}

//If anidado en ternario
console.log( autenticado ? puedePagar ? 'Si y puede pagar' : 'Si autenticado y puede pagar' : 'No autenticado');
