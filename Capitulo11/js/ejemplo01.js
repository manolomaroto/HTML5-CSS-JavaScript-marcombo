function iniciar() {
    var elemento = document.getElementById('aplicacion');
    elemento.addEventListener('click',bloquearraton);
}

function bloquearraton(e) {
    var elemento = e.target;
    elemento.requestPointerLock();
}