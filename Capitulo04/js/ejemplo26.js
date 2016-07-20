var elem;
function iniciar(){
    elem = document.getElementById('principal');
    elem.addEventListener('click',cambiarClase);
}
function cambiarClase(){
    elem.className = 'miclase';
}
addEventListener('load',iniciar);