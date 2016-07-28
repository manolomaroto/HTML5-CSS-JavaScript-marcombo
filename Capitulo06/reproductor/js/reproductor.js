//declaramos las variables
var maximo,mmedio,reproducir,barra, progreso, silenciar, volumen, bucle;

//funcion iniciar
function iniciar(){
    maximo=380;
    mmedio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    barra=document.getElementById('barra');
    progreso=document.getElementById('progreso');
    silenciar=document.getElementById('silenciar');
    volumen=document.getElementById('volumen');
    reproducir.addEventListener('click',cambiar);
    silenciar.addEventListener('click',sonido);
    barra.addEventListener('click',mover);
    volumen.addEventListener('change',nivel);
}

function cambiar(){
    if(!mmedio.paused && !mmedio.ended){
        mmedio.pause();
        reproducir.value = '>';
        clearInterval(bucle);
    }else{
        mmedio.play();
        reproducir.value='Pausa';
        bucle=setInterval(estado,1000);
    }
}

function estado(){
    if(!mmedio.ended){
        var tamano = parseInt(mmedio.currentTime * maximo / mmedio.duration);
        progreso.style.width = tamano + 'px';
    }else{
        progreso.style.width = '0px';
        reproducir.innerHTML = '>';
        clearInterval(bucle);
    }
}

function mover(e){
    if(!medio.paused && !medio.ended){
        var ratonX = e.pageX - barra.offsetLeft;
        var nuevoTiempo = ratonX * mmedio.duration / maximo;
        mmedio.currentTime = nuevoTiempo;
        progreso.style.width = ratonX + 'px';
    }
}

function sonido(){
    if(silenciar.value=='Mudo'){
        mmedio.muted=true;
        silenciar.value='Audio';
    }else{
        mmedio.muted=false;
        silenciar.value='Mudo';
    }
}

function nivel(){
    mmedio.volume = volumen.value;
}

addEventListener('load',iniciar);

