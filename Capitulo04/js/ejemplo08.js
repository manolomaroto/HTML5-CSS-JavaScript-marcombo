$(document).ready(function(){
    var mivariable = 5;
    var miresultado;
    function mifuncion(contador){
        contador = contador + 12;
        return contador;
    }
    miresultado = mifuncion(mivariable);
    $('.resultado').append(miresultado);
});