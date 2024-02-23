const primerEnlace = document.querySelector('a');
primerEnlace.remove();

//Eliminar desde el padre
const nav = document.querySelector('.navegacion');
nav.removeChild(nav.children[2]);