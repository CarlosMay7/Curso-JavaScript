const paises = ['Francia', 'España', 'Portugal'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 1000);
}

mostrarPaises();
nuevoPais('México', mostrarPaises);