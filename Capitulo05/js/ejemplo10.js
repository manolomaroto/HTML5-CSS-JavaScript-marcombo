var nombre1, nombre2;

function iniciar() {
    nombre1 = document.getElementById('nombre');
    nombre2 = document.getElementById('apellido');
    nombre1.addEventListener('input',validacion);
    nombre2.addEventListener('input',validacion);
    validacion();
}

function validacion(){
    if(nombre1.value == '' && nombre2.value == ''){
        nombre1.setCustomValidity('Ingrese al menos uno de los dos valores');
        nombre1.style.background = '#fdd';
        nombre2.style.background = '#fdd';
    }else{
        nombre1.setCustomValidity('');
        nombre1.style.background = "#fff";
        nombre2.style.background = "#fff";
    }
}

addEventListener('load', iniciar);