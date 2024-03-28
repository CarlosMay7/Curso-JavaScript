const encabezado = document.querySelector('.contenido-hero h1');

encabezado.innerText; //Si en el css tiene un visibility: hidden no lo encuentra
encabezado.textContent;
encabezado.innerHTML;

document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';