$(document).ready(function(){
    var mivariable = 9;
    var resultado = $('.resultado1');
    switch (mivariable) {
        case 5:
            resultado.append(" cinco");
            break;
        case 6:
            resultado.append(" seis");
            break;
        case 7:
            resultado.append(" siete");
            break;
    
        default:
            resultado.append(mivariable);
            break;
    }
  
});