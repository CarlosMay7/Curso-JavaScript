const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelect();
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrar();
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrar();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrar();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrar();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrar();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrar();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrar();
});

function mostrarAutos(autos) {
    limiparHTML();
    autos.forEach(auto => {
        const {marca, modelo, year, transmision, puertas, precio, color} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} puertas- ${transmision} - $${precio} - ${color}`;

        resultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    for(let i = max; i>=min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function limiparHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrar() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision);

    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limiparHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No Se Encontraron Resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }

    return auto;
}

function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year);
    }

    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }

    return auto; 
}

function filtrarMaximo(auto) {
    if(datosBusqueda.maximo) {
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }

    return auto; 
}

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }

    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }

    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }

    return auto;
}