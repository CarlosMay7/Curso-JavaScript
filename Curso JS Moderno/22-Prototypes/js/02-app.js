function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Yo = new Cliente('Carlos', 700);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.saldo = saldo;
}

const CCM = new Empresa('Código Con May', 700, 'JavaScript');