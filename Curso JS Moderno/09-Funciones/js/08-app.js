function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function impuesto(total) {
    return total*1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(700);
const totalPagar = impuesto(total);

console.log(total);
console.log(totalPagar);

