const metodo = 'efectivo';

switch(metodo) {
    case 'efectivo':
        console.log(`Pagaste con ${metodo}`);
        break;
        
    case 'cheque':
        console.log(`Pagaste con ${metodo}`);
        break;

    default:
        console.log('Sin método');
        break;
}