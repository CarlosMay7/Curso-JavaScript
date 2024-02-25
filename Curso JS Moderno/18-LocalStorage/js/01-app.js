localStorage.setItem('nombre', 'Carlos');

sessionStorage.setItem('nombre', 'Carlos');

const producto = {
    nombre: 'otro producto'
}

localStorage.setItem('objeto', JSON.stringify(producto));