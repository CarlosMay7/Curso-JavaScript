const enlace = document.createElement('A');

enlace.textContent = 'Nuevo Enlace';
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';

const nav = document.querySelector('.navegacion');
nav.appendChild(enlace);
nav.insertBefore(enlace, nav.children[1]);


//Crear card

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

const card = document.createElement('DIV');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);


const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);