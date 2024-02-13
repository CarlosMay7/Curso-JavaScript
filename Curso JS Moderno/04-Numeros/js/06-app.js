const num1 = '7';
const num2 = '7.7';
const num3 = 20;
const num4 = 'veinte';

//Convertir en números
const numero1Number = Number.parseInt(num1);
const numero2Float = Number.parseFloat(num1);

//Revisar si es un entero
Number.isInteger(num3) //True
Number.isInteger(num1) //False