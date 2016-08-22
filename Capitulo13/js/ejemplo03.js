//filtramos las fuentes por su id para indicar que imagen puede ser filtrada y cual no.
var soltar;
function iniciar(){
    var imagenes = document.querySelectorAll('#cajaImagen > img');
    for(var i=0; i < imagenes.length; i++){
        imagenes[i].addEventListener('dragstart',arrastrado);
    }
    soltar = document.getElementById('cajaObjetivo');
    soltar.addEventListener('dragenter', function(e){
        e.preventDefault();
    });
    soltar.addEventListener('dragover',function(e){
        e.preventDefault();
    });
    soltar.addEventListener('drop',soltado);
}

function arrastrado(e) {
    elem = e.target;
    e.dataTransfer.setData('Text',elem.getAttribute('id'));
}

function soltado(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if(id != "imagen4"){
        var src = document.getElementById(id).src;
        soltar.innerHTML = '<img src="' + src + '">';
    }else{
        soltar.innerHTML = 'No admitida';
    }
}

addEventListener('load',iniciar);

