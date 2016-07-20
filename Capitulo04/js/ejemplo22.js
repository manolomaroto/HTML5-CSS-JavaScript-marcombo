function hacerClick(){
    var elemento = document.querySelector("#principal p:first-child");
    elemento.addEventListener('click',mostrarAlerta);
}
function mostrarAlerta(){
    alert('Has hecho click');
}

addEventListener('load',hacerClick);