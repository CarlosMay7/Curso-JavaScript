//Pregunta el nombre
const nombre = prompt('¿Tu nombre?');

//Toma el nombre y lo agrega en la pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo js moderno`;