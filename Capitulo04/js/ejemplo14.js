$(document).ready(function(){
    var miObjeto = {
        nombre: 'Juan',
        edad: 35,
        mostrarNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nuevoNombre){
            this.nombre = nuevoNombre;
        }
    }
    //Ahora creamos el nuevo objeto
    var empleado = Object.create(miObjeto);
    empleado.cambiarNombre('Andres');
    empleado.mostrarNombre();
    miObjeto.mostrarNombre();
});