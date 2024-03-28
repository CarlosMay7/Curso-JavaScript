function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const info = {
    nombre: 'May'
}

const musicaFav = ['Regueton', 'Pop', 'Latino'];

//Con objetos se reemplaza el que esté usando por defecto y se agrega el actual
//Se pasa cada elemento del arreglo de forma individual
persona.call(info, musicaFav[0], musicaFav[1]);

//Se puede pasar arreglos
persona.apply(info, musicaFav);

//Como call pero crea una nueva función
const nuevaPers = persona.bind(info, musicaFav[0], musicaFav[1]);