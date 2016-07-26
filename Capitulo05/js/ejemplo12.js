var formulario;

function iniciar() {
    var boton = document.getElementById('enviar');
    boton.addEventListener('click',enviarFormulario);
    formulario = document.querySelector("form[name='miformulario']");
    formulario.addEventListener('invalid',validacion,true);
    formulario.addEventListener('input',controlar);
}

function validacion(e){
    var elem = e.target;
    elem.style.background = "#f00";
}

function enviarFormulario(){
    var valido = formulario.checkValidity();
    if(valido){
        formulario.submit();
    }
}

function controlar(e){
    var elem = e.target;
    if(elem.validity.valid){
        elem.style.background = "#fff";
    }else{
        elem.style.background = "#f00";
    }
}

addEventListener('load',iniciar);