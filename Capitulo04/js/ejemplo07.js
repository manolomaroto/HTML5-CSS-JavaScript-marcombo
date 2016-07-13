$(document).ready(function(){
    var mivariable = 5;
    function mifuncion(){
        var mivariable = "Esto es la variable de la función";
        $('.resultado1').append(mivariable);
    }
    mifuncion();
    $('.resultado2').append(mivariable);
});