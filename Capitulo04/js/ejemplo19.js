$(document).ready(function(){
    function MiObjeto(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.mostrarNombre = function(){
            alert(this.nombre);
        };
        this.cambiarNombre = function(nuevoNombre){
            this.nombre = nuevoNombre;
        };
    }
    var empleado = new MiObjeto('Manolo',23);
    empleado.mostrarNombre();
});