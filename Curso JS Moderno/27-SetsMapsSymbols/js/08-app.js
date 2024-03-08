const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

for( let entry of ciudades.entries() ){
    console.log(entry);
}

for( let entry of ordenes.entries() ){
    console.log(entry);
}

for( let entry of datos.entries() ){
    console.log(entry);
}

for(let value of ciudades.values()) {
    console.log(value);
}

for( let value of ordenes.values() ){
    console.log(value);
}

for( let value of datos.values() ){
    console.log(value);
}


for(let keys of ciudades.keys() ) {
    console.log(keys);
}

for( let keys of ordenes.keys()  ){
    console.log(keys);
}

for( let keys of datos.keys()  ){
    console.log(keys);
}


for(let ciudad of ciudades) {
    console.log(ciudad);
}

for( let orden of ordenes){
    console.log(orden);
}

for( let dato of datos){
    console.log(dato);
}

const mensaje = 'Aprendiendo JavaScript';

for( let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje[i]);
}

for( let letra of mensaje) {
    console.log(letra);
}

const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace.href);
}
   