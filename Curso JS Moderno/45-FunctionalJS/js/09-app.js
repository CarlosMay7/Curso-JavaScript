const suma = (a,b,c) => a+b+c;
const parcial = (a) => (b, c) => {
    submitCita(a,b,c)
}

// const primerNumero = parcial(5);
// const resultado = primerNumero(4, 5);


const resultadoParcial = parcial(5)(2,5);
