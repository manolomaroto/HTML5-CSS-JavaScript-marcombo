function MiObjeto(nombreInicial, edadInicial) {
    this.nombre = nombreInicial;
    this.edad = edadInicial;
    this.mostrarNombre=function(){
        alert(this.nombre);
    };
    this.cambiarNombre=function(nuevoNombre){
        this.nombre=nuevoNombre;
    };
}
MiObjeto.prototype.mostrarEdad=function(){alert(this.edad);}
var empleado = new MiObjeto('Federico',43);
empleado.mostrarEdad();