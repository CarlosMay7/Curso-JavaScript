//Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `Cliente ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    static bienvenida() {
        console.log('Bienvenido');
    }
}

const may = new Cliente('May', 20);
may.mostrarInfo();


//Class exoression 
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `Cliente ${this.nombre}, tu saldo es ${this.saldo}`;
    }
}

const may2 = new Cliente2('May', 20);