var soltar, canvas;

function iniciar(){
    var imagenes = document.querySelectorAll('#cajaImagen > img');
    for(var i = 0; i < imagenes.length;i++){
        imagenes[i].addEventListener('dragstart',arrastrado);
        imagenes[i].addEventListener('dragend', finalizado);
    }
    soltar = document.getElementById('canvas');
    canvas = soltar.getContext('2d');
    soltar.addEventListener('dragenter', function(e){ e.preventDefault();});
    soltar.addEventListener('dragover', function(e){ e.preventDefault();});
    soltar.addEventListener('drop', soltado);
}

function finalizado(e){
    elem = e.target;
    elem.style.visibility = 'hidden';
}

function arrastrado(e){
    elem = e.target;
    e.dataTransfer.setData('Text',elem.getAttribute('id'));
    //ponemos la imagen para que sea la que se vea junto al raton
    e.dataTransfer.setDragImage(elem, 0, 0);
}

function soltado(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elem = document.getElementById(id);
    var posx = e.pageX - soltar.offsetLeft;
    var posy = e.pageY - soltar.offsetTop;
    canvas.drawImage(elem, posx , posy);
}

addEventListener('load',iniciar);