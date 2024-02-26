function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizar = function () {
    let cantidad;
    let base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;

        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;
            break;

        default:
            break;
    }

    const diferencia = new Date().getFullYear() - this.year;
    //Cada año que la diferencia es mayor, el costo se reduce en un 3%
    cantidad = ((diferencia * 3) * cantidad) / 100;

    //Tipo básico 30% más
    //completo 50%

    if(this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI() {}

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 10;

    const selectYear = document.querySelector('#year');
    for(let i = max; i > min; i--) {
        let opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        selectYear.appendChild(opcion);
    }
}

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV'); 
    
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {
    const {marca, year, tipo} = seguro; 

    let textoMarca;
    switch(marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiático';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    const div = document.createElement('DIV');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold ">Tipo de Seguro: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `

    const resultadoDiv = document.querySelector('#resultado');

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

initListeners();
function initListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizar);
}

function cotizar(e) {
    e.preventDefault();
    const marca = document.querySelector('#marca').value; 

    const year = document.querySelector('#year').value; 

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son necesarios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'correcto');

    const resultado = document.querySelector('#resultado div');
    if(resultado != null) {
        resultado.remove();
    }

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizar();

    ui.mostrarResultado(total, seguro)

}