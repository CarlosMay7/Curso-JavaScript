const cliente = new Map();

cliente.set('Nombre', 'May');
cliente.set('Tipo', 'Premium');
cliente.set('Saldo', 2000);

cliente.size();
cliente.has('Nombre');
cliente.get('Nombre');
cliente.delete('Saldo');
cliente.clear();

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
paciente.set('Nombre', 'May');

paciente.forEach(datos => console.log(datos));