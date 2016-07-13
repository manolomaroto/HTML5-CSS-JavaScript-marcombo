$(document).ready(function(){
    var mivariable = 5;
    var mifuncion = function(){
        mivariable = mivariable*2;
    }
    for(var i = 0; i < 10;i++){
        mifuncion();
    }
    $('.resultado').append(mivariable);
});