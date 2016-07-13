$(document).ready(function(){
	var miobjeto = {
		nombre:"Manuel González",
		edad: 41,
	}
	$('.nombre').append(miobjeto.nombre);
	$('.edad').append(miobjeto['edad']);
});