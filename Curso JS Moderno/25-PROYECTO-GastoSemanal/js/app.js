const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')

initListeners();
function initListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total = gasto.cantidad, 0);

        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        const divAlerta = document.createElement('DIV');
        divAlerta.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        } else {
            divAlerta.classList.add('alert-success');
        }

        divAlerta.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divAlerta, formulario);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

    mostrarGastos(gastosArray) {
        this.limpiarHTML();
        gastosArray.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $${cantidad} </span>`

            const btnBorrar = document.createElement('BUTTON');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);
            gastoListado.appendChild(nuevoGasto);
        });
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        if((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        if(restante<=0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

    limpiarHTML() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
}

const ui = new UI();
let presupuesto;

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if(preguntarPresupuesto === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto); 
}

function agregarGasto(e) {
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos Campos Son Obligatorios', 'error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad No Válida', 'error');
        return;
    }

    const gasto = {nombre, cantidad, id: Date.now()};
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta('Gasto Agregado!');

    const {gastos, restante} = presupuesto;
    console.log(restante);
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto); 
}