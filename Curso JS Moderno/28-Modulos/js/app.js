"use strict";

import { nombreCliente } from './cliente.js';

console.log(nombreCliente); 

import { nombreCliente, ahorro }  from './cliente.js';



import { nombreCliente, ahorro, mostrarInformacion }  from './cliente.js';
// let cliente = mostrarInformacion(nombreCliente, ahorro);
console.log(cliente);
   


import { nombreCliente, ahorro, Cliente }  from './cliente.js';



// let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());



import { Cliente }  from './cliente.js';
import { Empresa } from './empresa.js';


const nombreCliente = 'Juan',
      ahorroCliente = 400;

let cliente = new Cliente(nombreCliente, ahorroCliente);
console.log(cliente.mostrarInformacion());

const nombreEmpresa = 'Udemy',
    ahorroEmpresa = 1000000000,
    categoriaEmpresa = 'aprendizaje';

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoriaEmpresa);
console.log(empresa.mostrarInformacion());
 
import funcion from './cliente.js';

funcion();