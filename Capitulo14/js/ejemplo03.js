function iniciar(){
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoItem);
    
}

function nuevoItem(){
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;

    sessionStorage.setItem(clave, valor);
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
    mostrar();
}

function mostrar(){
    var cajaDatos = document.getElementById('cajaDatos');
    cajaDatos.innerHTML = '';
    for(var i = 0; i < sessionStorage.length; i++){
        var clave = sessionStorage.key(i);
        var valor = sessionStorage.getItem(clave);
        cajaDatos.innerHTML  += '<div>' + clave + ' - ' + valor + '</div>';
    }
}

addEventListener('load',iniciar);