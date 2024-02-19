const reproductor =  {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el id ${id}...`)
    },
    pausar : function() {
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando playlist de ${nombre}...`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function(id) {
    console.log(`Borrando canción ${id}`);
}

reproductor.borrar(40);
reproductor.crearPlaylist("Reguetón");