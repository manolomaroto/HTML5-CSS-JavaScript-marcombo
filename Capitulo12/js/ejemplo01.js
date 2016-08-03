function iniciar() {
    var elemento = document.getElementById('aplicacion');
    elemento.addEventListener('click',bloquearRaton);
}

function bloquearRaton(e) {
    var elemento = e.target;
    elemento.requestPointerLock();
}

addEventListener('load',iniciar);
