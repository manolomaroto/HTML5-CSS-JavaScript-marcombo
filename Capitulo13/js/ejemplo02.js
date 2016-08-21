//al ejemplo uno añadimos los eventos dragenter, dragleave y dragend

var fuente1, soltar;
function iniciar(){
    fuente1 = document.getElementById('imagen');
    fuente1.addEventListener('dragstart',arrastrando);
    fuente1.addEventListener('dragend',finalizando);

    soltar=document.getElementById('cajaObjetivo');
    soltar.addEventListener('dragenter',entrando);
    soltar.addEventListener('dragleave',saliendo);
    soltar.addEventListener('dragover',function(e){
        e.preventDefault();
    });
    soltar.addEventListener('drop',soltado);
}

function entrando(e){
    e.preventDefault();
    soltar.style.background = 'rgba(0,150,0,.2)';
}

function saliendo(e){
    e.preventDefault();
    soltar.style.background = '#fff';
}

function finalizando(e){
    elem=e.target;
    elem.style.visibility = 'hidden';
}

function arrastrando(e) {
    var codigo = '<img src="' +fuente1.getAttribute('src') + '">';
    e.dataTransfer.setData('Text',codigo);
}

function soltado(e) {
    e.preventDefault();
    soltar.style.background = '#fff';
    soltar.innerHTML=e.dataTransfer.getData('Text');
}

addEventListener('load',iniciar);