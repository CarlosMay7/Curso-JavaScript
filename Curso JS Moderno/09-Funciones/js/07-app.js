iniciarApp();
function iniciarApp() {
    console.log('Iniciando');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Segunda funcion');

    usuarioAutenticado('May');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado, hola ${usuario}`);

}

