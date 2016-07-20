function hacerClick(){
    var elem = document.getElementById('principal');
    var pelem;
    if(elem.webkitMatchesSelector('section')){
        pelem = elem.querySelector('p:first-child');
        pelem.addEventListener('click',mostrarAlerta);
    }
}

function mostrarAlerta(){
    alert('Haz hecho click');

}

addEventListener('load',hacerClick);