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


function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); //Hereda constructor cliente
    this.telefono = telefono;
}

//Se hereda antes de instanciar
Persona.prototype = Object.create( Cliente.prototype);//Copia el prototype de cliente a persona
Persona.prototype.constructor = Cliente;

const May = new Persona('May', 70000, 999827560);