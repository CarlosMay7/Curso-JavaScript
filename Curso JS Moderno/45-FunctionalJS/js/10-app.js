const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(info.nombre)
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log('Guardando');
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`${info.puesto}`);
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email, 
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email, 
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Juann');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Pedro', 'pedro@correo.com', 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@cliente.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();