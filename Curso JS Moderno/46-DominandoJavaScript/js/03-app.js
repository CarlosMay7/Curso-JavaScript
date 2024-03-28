const numero1 = 20;
const numero2 = '30';

// Coercion implicita porque js lo transforma a string sin mostrarlo
console.log(numero1 + numero2);
// Explícita porque se obliga a convertir
console.log(Number(numero2));