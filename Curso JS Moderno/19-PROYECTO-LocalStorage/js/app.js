const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


initEventListeners();
function initEventListeners() {
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    });
}

function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    if(tweet === '') {
        mostrarError('El mensaje no puede ir vacío');
        return;
    } 

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj];

    crearHTML();
    formulario.reset();
}

function mostrarError(error) {
    const mensaje = document.createElement('P');
    mensaje.textContent = error;
    mensaje.classList.add('error')

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensaje);

    setTimeout(() => {
       mensaje.remove(); 
    }, 3000);
}

function crearHTML() {
    limpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            const eliminar = document.createElement('a');
            eliminar.classList.add('borrar-tweet');
            eliminar.textContent = ' X ';

            eliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('LI');
            li.textContent = tweet.tweet;

            listaTweets.appendChild(li);
            listaTweets.appendChild(eliminar);
        })
    }

    sincronizarStorage();
}

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}