const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('info');
});

tituloDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('titulo');
});