var constructor = function(){
    var nombre = 'Juan';
    var edad = 20;
    var obj = {
        mostrarNombre:function(){alert(nombre)},
        cambiarNombre:function(nuevoNombre){nombre=nuevoNombre},
    }
    return obj;
}
empleado = constructor();
empleado.mostrarNombre();