const suma = (a, b) => {
    return a + b;
}

const multiplicar = (a, b) => {
    return a * b;
}

const sumarMultiplicar = fn => fn(10, 20);

sumarMultiplicar(suma);