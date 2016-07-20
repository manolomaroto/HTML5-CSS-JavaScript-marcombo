var elem;
function iniciar(){
    elem = document.getElementById('principal');
    elem.addEventListener('click',cambiarClase);
}
function cambiarClase(){
    elem.classList.toggle('miclase');
}
addEventListener('load',iniciar);