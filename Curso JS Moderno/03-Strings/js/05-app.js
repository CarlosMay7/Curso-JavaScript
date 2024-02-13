const producto = 'Monitor de muchas pulgadas';

//Reemplazar partes de cadena
producto.replace('Pulgadas', '"');


//Cortar una parte de una cadena de texto pasandole el inicio y la posicion donde va a terminar 
producto.slice(0, 10);
//Si no se pone el final es desde donde se ingresó hasta el final
producto.slice(7, 10);

//Alternativa a slice
producto.substring(0,10);
//Si le ponen un valor mayor como inicio que al final, slice no hace nada y substring trata de hacer que funcione

// Para un caracter en una posicion especifica, se usa un substring o 
producto.charAt(0);

