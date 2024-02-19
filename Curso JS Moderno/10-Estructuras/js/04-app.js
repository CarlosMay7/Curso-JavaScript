const dinero = 300;
const totalPagar = 500;
const tarjeta = true;

if(dinero >= totalPagar) {
    console.log('Se puede pagar');
} else if(tarjeta){
    console.log('Puedo por tarjeta');
}
  else {
    console.log('Insuficiente');
}

