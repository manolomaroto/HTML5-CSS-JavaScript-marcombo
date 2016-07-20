function hacerClick(){
    var elem = document.querySelectorAll('#principal p');
    elem[0].addEventListener('click',mostrarAlerta);
}

function mostrarAlerta(){
    alert('Has hecho click');
}

addEventListener('load',hacerClick);