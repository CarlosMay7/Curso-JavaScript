"use strict";

(function() {
    const nombreCliente =  'Juan';
    let ahorro = 200;

})();

// export const nombreCliente =  'Juan'; 

export const nombreCliente =  'Juan';
export const ahorro = 200


export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}


export default function funcion() {
    console.log('Función por default')
}

export default function () {
    console.log('Función por default')
}