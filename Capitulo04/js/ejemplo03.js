$(document).ready(function(){
    var variableFor = 10;
    var resultado1 = $('.resultado1');
    for(var i = 0; i <= variableFor; i++){
        resultado1.append(' '+ i);
    }
    var variableWhile = 5;
    var resultado2 = $('.resultado2');
    while(variableWhile <= 10){
        resultado2.append(' ' + variableWhile);
        variableWhile++;
    }
    var variableDoWhile = 1;
    var resultado3=$('.resultado3');
    do{
        resultado3.append(' ' + variableDoWhile);
        variableDoWhile++;
    }while(variableDoWhile <= 10);
});