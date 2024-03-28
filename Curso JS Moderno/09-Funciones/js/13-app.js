const reproductor =  {
    cancion: '',
    reproducir : id => console.log(`Reproduciendo canción con el id ${id}...`),
    pausar : () => console.log(`Pausando...`),
    crearPlaylist : nombre => console.log(`Creando playlist de ${nombre}...`),
    set nuevaCancion (cancion) {
        this.cancion = cancion;
        console.log('Agregando cancion');
    },
    get obtenerCancion (){
        console.log(`${this.cancion}`);   
    } 
}

reproductor.obtenerCancion("Yonaguni");
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = id => console.log(`Borrando canción ${id}`);

reproductor.borrar(40);
reproductor.crearPlaylist("Reguetón");