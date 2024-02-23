const navegacion = document.querySelector('.navegacion');

navegacion.firstElementChild;
navegacion.lastElementChild;

navegacion.childNodes;//Toma hasta los espacios en blanco
navegacion.children[0];//Solo toma elementos reales
navegacion.children[0].nodeName;//Solo toma elementos reales
navegacion.children[0].nodeType;//Solo toma elementos reales


const card = document.querySelector('.card');
card.children[1].children;
card.children[0].children.src = 'img/hacer3.jpg';


card.parentNode;//Toma en cuenta los espacios en blanco
card.parentElement;


card.nextElementSibling;

const ultimoCard = document.querySelector('.card:nth-child(4)');
ultimoCard.previousElementSibling;