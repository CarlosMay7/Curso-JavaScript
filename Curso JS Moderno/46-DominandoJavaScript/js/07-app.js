console.log('Primero'); //Mayor prioridad

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(function(resolve) { //3 prioridad
    resolve('Desconocido')
}).then(console.log())

console.log('Último');

function hola() {

}

hola(); //2