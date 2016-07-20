var elem;
function iniciar(){
    elem = document.getElementById('principal');
    elem.addEventListener('click',mostrarId);
    
}
function mostrarId(){
    
    resultado = elem.getAttribute('id');
    document.querySelector('.resultado').innerHTML = resultado;
    
}

addEventListener('load',iniciar);