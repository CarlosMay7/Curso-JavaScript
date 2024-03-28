const weakSet = new WeakSet();

//Solo se pueden pasar objetos
const cliente = {
    nombre: ''
}

const nombre = -'juan'

//No son iterables y no tiene la propiedad size

//No se puede
// weakSet.add(nombre);

weakSet.add(cliente);
weakSet.delete(cliente);
console.log(weakSet.has(cliente));