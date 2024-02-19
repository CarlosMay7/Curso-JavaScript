const usuario = true;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Puede comporar');
} else if( !usuario){
    console.log('No es usuario')
} else if( !puedePagar){
    console.log('No puedes pagar')
} else {
    console.log('No puede');
}