var elem;

function iniciar(){
    elem = document.getElementById('principal');
    elem.addEventListener('click',cambiarClase);
}
function cambiarClase(){
    
    if(elem.classList.contains('miclase')){
        elem.classList.remove('miclase');
    }else{
        elem.classList.add('miclase');
    }
}

addEventListener('load',iniciar)