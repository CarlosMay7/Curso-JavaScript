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

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        console.log('Bienvenido a la empresa');
    }
}

const may = new Cliente('May', 20);
const empresa = new Empresa('MayTech', 200);