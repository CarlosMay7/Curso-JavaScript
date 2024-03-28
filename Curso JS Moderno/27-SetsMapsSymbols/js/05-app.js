const sym = Symbol();
const sym2 = Symbol();

//Los symbols nunca son iguales

const nombre = Symbol();
const apellido = Symbol();

const Persona = {}; 

Persona[nombre] = 'Carlos';
Persona[apellido] = 'May';
Persona.tipo = 'Premium';
Persona.saldo = 200;

//Las propiedades con symbol no son iterables y solo se acceden con sintaxis de []
console.log(Persona[nombre]);

//Descripcion de symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';