$(document).ready(function(){
    var miObjeto = {
        nombre: 'Juan',
        edad: 30,
        moto: {
            marca: 'Yamaha',
            fecha: 1990,
        },
        mostrarMoto: function(){
            $('.resultado').append(miObjeto.nombre + " tiene una " + miObjeto.moto.marca);
        }
    }
    miObjeto.mostrarMoto();
});