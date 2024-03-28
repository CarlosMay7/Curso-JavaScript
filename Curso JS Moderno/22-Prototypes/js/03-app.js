function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, TipoCliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarsaldo = function(retiro) {
    this.saldo -= retiro;
}

const Yo = new Cliente('Carlos', 700);
Yo.nombreClienteSaldo();
Yo.retirarsaldo(7);
