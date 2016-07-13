
var mimatriz = ["rojo",32];
mimatriz.push('coche');
$(document).ready(function(){
$('.resultado1').append(mimatriz[2]);
$('.resultado2').append(mimatriz.shift());
});
