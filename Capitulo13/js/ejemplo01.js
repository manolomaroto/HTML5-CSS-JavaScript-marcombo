var fuente1, soltar;
function iniciar(){
    fuente1 = document.getElementById('imagen');
    fuente1.addEventListener('dragstart', arrastrado);

    soltar = document.getElementById('cajaObjetivo');
    //Los dos siguientes eventos a los que se les agrega escuchas sirven para evitar el comportamiento por
    //defecto de los navegadores que no suelen permitirlo.
    soltar.addEventListener('dragenter', function(e){
        e.preventDefault();
    });
    soltar.addEventListener('dragover', function(e){
        e.preventDefault();
    });
    soltar.addEventListener('drop', soltado);
}

function arrastrado(e){
    var codigo = '<img src="'+ fuente1.getAttribute('src')+ '">';
    e.dataTransfer.setData('Text', codigo);
}

function soltado(e){
    e.preventDefault();
    soltar.innerHTML = e.dataTransfer.getData('Text');
}

addEventListener('load',iniciar);