const automovil = {
    modelo: 'Camaro',
    año: 1000,
    motor: '7'
}

//Itera sobre objetos
for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
}