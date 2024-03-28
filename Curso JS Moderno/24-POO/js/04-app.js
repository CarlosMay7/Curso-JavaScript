class Cliente {

    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    mostrarInfo() {
        return `Cliente ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    static bienvenida() {
        console.log('Bienvenido');
    }
}

const may = new Cliente('May', 500);
// may.#nombre; 