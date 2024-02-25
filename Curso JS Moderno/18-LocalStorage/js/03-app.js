localStorage.removeItem('nombre');

//Actualizar
const objetoJSON = JSON.parse(localStorage.getItem('objeto'));
objetoJSON.nombre = 'Nuevo nombre';
localStorage.setItem('objeto', JSON.stringify(objetoJSON));

localStorage.clear();