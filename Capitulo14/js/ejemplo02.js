function iniciar(){
    var boton = document.getElementById('grabar');
    boton.addEventListener('click',nuevoItem);
}

function nuevoItem(){
    var clave = document.getElementById('clave');
    var valor = document.getElementById('texto');
    sessionStorage[clave] = valor;

    mostrar(clave);
}

function mostrar(clave){
    var cajaDatos = document.getElementById('cajaDatos');
    var valor = sessionStorage[clave];
    cajaDatos.innerHTML = '<div>' + clave.value + ' - ' + valor.value + '</div>';
}

addEventListener('load', iniciar);