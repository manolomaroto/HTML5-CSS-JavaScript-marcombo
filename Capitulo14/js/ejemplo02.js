function iniciar(){
    var boton = document.getElementById('grabar');
    boton.addEventListener('click',nuevoItem);
}

function nuevoItem(){
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage[clave] = valor;

    mostrar(clave);
}

function mostrar(clave){
    var cajaDatos = document.getElementById('cajaDatos');
    var valor = sessionStorage[clave];
    cajaDatos.innerHTML = '<div>' + clave + ' - ' + valor + '</div>';
}

addEventListener('load', iniciar);