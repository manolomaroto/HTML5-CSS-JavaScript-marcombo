var soltar;
var lista = '';

function iniciar(){
    soltar = document.getElementById('cajaObjetivo');
    soltar.addEventListener('dragenter', function(e){e.preventDefault();});
    soltar.addEventListener('dragover', function(e){e.preventDefault();});
    soltar.addEventListener('drop',soltado);
}

function soltado(e){
    e.preventDefault();
    var archivos = e.dataTransfer.files;
    
    for(var i = 0; i < archivos.length; i++){
        lista += 'Archivo: ' + archivos[i].name + ' ' + archivos[i].size + '<br>';
    }
    soltar.innerHTML = lista;
}

addEventListener('load',iniciar);