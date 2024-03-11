(function(){
    let DB;
    const formulario = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    });

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const cliente = {
            nombre,
            email,
            telefono, 
            empresa,
            id: Date.now()
        }

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        const transaccion = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaccion.objectStore('crm');

        objectStore.add(cliente);

        transaccion.onerror = function() {
            imprimirAlerta('Error', 'error');
        }

        transaccion.oncomplete = function() {
            imprimirAlerta('El cliente fue agregado correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
            
        }
    }
})();