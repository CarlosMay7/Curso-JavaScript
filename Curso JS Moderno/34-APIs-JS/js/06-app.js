const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', speechAPI);

function speechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const speech = new SpeechRecognition();

    speech.start();
    speech.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando';
    };

    speech.onspeechend = function () {
        salida.textContent = 'Dejo de grabar';
        speech.stop();
    };

    speech.onresult = function (e) {
        const {confidence, transcript} = e.results[0][0];

        const resultado = document.createElement('P');
        resultado.innerHTML = transcript;
        salida.appendChild(resultado);
    }
}