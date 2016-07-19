function hacerClick(){
    var elem = document.getElementsByClassName('parrafo')[0];
    elem.addEventListener('click',mostrarAlerta);
}

function mostrarAlerta(){
    alert('Has hecho click');
}
//añadimos un escuchador que cuando cargue la página active el código
addEventListener('load',hacerClick);