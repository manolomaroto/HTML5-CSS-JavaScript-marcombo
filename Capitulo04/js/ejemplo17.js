$(document).ready(function(){
    var constructor = function(nombreInicial){
        var obj = {
            nombre: nombreInicial,
            edad: 30,
            mostrarNombre: function(){ alert(this.nombre)},
            cambiarNombre: function(nuevoNombre){ this.nombre= nuevoNombre}
        };
        return obj;
    };
    empleado = constructor('Juan');
    empleado.mostrarNombre();
});