$(document).ready(function(){
    var miObjeto = {
        nombre: 'Juan',
        edad: 30,
        mostrarNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nombreNuevo){
            this.nombre = nombreNuevo;
        }
    };
    var empleado = Object.create(miObjeto);
    miObjeto.edad = 24;
    miObjeto.mostrarEdad = function(){
        alert(this.edad);
    }
    empleado.mostrarEdad();

});