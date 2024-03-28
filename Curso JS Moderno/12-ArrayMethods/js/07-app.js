const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

const resultado = meses.concat(meses2, 'Otro Mes');

//Si se pasa otro elemento q no sea un arreglo crea uno por cada elemento si se usa el spread
const resultado2 = [...meses, ...meses2, ...'Otro Mes'];

