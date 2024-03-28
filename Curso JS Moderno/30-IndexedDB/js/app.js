
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 3000);
});


function crmDB() {
    let crmDB = window.indexedDB.open('crm', 1);

    crmDB.onerror = function() {
        console.log('Error');
    }
    crmDB.onsuccess = function() {
        DB = crmDB.result;
        
        console.log(DB);
    }

    crmDB.onupgradeneeded = function(e) {
        let db = e.target.result;

        let objectStore = db.createObjectStore('crm', { keyPath: 'crm',  autoIncrement: true } );

        objectStore.createIndex('nombre', 'nombre', { unique: false } );
        objectStore.createIndex('email', 'email', { unique: true } );
        objectStore.createIndex('telefono', 'telefono', { unique: false } );

        console.log('DB creada y lista');
    }
}


function crearCliente() {

    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(event) {
        console.log('Transacción Completada');
    };
    
    transaction.onerror = function(event) {
        console.log('Hubo un error en la transacción')
    };

    let objectStore = transaction.objectStore('crm');
    console.log(objectStore);

    const nuevoCliente = {
        nombre : "Juan",
        email: "correo@correo.com",
        telefono: 1020912
    }


    let peticion = objectStore.add(nuevoCliente);
}

