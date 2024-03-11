const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if(descuento) {
        resolve('Descuento agregado');
    } else {
        reject('No se pudo aplicar');
    }
});

aplicarDescuento
    .then( resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });