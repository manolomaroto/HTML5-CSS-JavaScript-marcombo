$(document).ready(function(){
    var miObjeto = {
        nombre: 'Juan',
        edad: 30,
        mostrarnombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nuevoNombre){
            this.nombre = nuevoNombre;
        }
    };
    var empleado1 = Object.create(miObjeto);
    var empleado2 = Object.create(empleado1);
    var empleado3 = Object.create(empleado2);

    empleado2.mostrarEdad = function(){
        alert(this.edad);
    }

    empleado3.edad = 24;
    empleado3.mostrarEdad();
});