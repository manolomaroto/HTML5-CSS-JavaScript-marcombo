

$(document).ready(function(){
    var miObjeto = {
    nombre: "Juan",
    edad: 30,
    mostrarNombre: function(){
        $('.nombre1').append(miObjeto.nombre);
       
    },
    cambiarNombre: function(nombre){
        miObjeto.nombre = nombre;
    },
    mostrarNombre2: function(){
        $('.nombre2').append(miObjeto.nombre);
       
    },
    }
    miObjeto.mostrarNombre();
    miObjeto.cambiarNombre('Manolo');
    miObjeto.mostrarNombre2();
   
});



