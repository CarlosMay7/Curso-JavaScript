const autenticado = true;

if(autenticado) {
    console.log('Autenticado!');
}

const puntaje = 300;

if(puntaje > 400) {
    console.log('Excelente');
} else if(puntaje > 300) {
    console.log('Buen puntaje!');
}

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente');
        return;
    } 

    if(puntaje > 300) {
        console.log('Buen puntaje!');
        return;
    }
}
revisarPuntaje();
