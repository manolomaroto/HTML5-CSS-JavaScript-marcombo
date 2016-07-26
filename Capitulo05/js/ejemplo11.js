var formulario;

function iniciar(){
    var boton = document.getElementById('enviar');
    boton.addEventListener('click',enviarFormulario);
    formulario = document.querySelector("form[name='miformulario']");
    formulario.addEventListener("invalid",validacion,true);
   
}

function validacion(e){
    var elem = e.target;
    elem.style.background = '#f00';
}

function enviarFormulario(){
    var valido = formulario.checkValidity();
    if (valido){
        formulario.submit();
    }
}

addEventListener('load', iniciar);