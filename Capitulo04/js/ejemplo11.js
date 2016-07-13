var miobjeto = {
	nombre:'Alberto',
	edad:21
}
miobjeto.nombre = 'Juan';
miobjeto.trabajo = 'Programador';
document.getElementById('resultado').innerHTML = 'Mi nombre es ' + miobjeto.nombre + ' y soy ' + miobjeto.trabajo;