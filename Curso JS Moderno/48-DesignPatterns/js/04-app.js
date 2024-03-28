class InputHtml {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`
    }
}

class HtmlFactory {
    crearElemento(tipo, nombre) {
        switch(tipo) {
            case 'text':
            return new InputHtml(tipo, nombre);

            case 'tel':
            return new InputHtml(tipo, nombre);

            case 'email':
            return new InputHtml(tipo, nombre);

            default:
                return;
        }
    }
}

const elemento = new HtmlFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente')

const elemento2 = new HtmlFactory();
const inputText2 = elemento.crearElemento('tel', 'nombre-cliente')

const elemento3 = new HtmlFactory();
const inputText3 = elemento.crearElemento('email', 'nombre-cliente')