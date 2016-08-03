var canvas, posx, posy;

function iniciar() {
    var elemento = document.getElementById('canvas');
    canvas = elemento.getContext('2d');

    elemento.addEventListener('click',bloquearraton);
    mensajeinicio();
}

function dibujar(e){
    canvas.clearRect(0,0,500,400);

    var control1, control2;
    control1 = posx + e.movementX;
    control2 = posy + e.movementY;
    if(control1 > 0 && control1 < 500){
        posx = control1;
    }
    if(control2 > 0 && control2 < 400){
        posy=control2;
    }
    canvas.beginPath();
    canvas.moveTo(posx,posy-20);
    canvas.lineTo(posx, posy + 20);
    canvas.moveTo(posx - 20,posy);
    canvas.lineTo(posx + 20, posy);
    canvas.moveTo(posx + 20,posy);
    canvas.arc(posx,posy,20,0,Math.PI * 2);
    canvas.stroke();
}

function bloquearraton(e) {
    var elemento = e.target;
    if(!document.pointerLockElement){
        elemento.mozRequestPointerLock();
        posx = e.clientX;
        posy = e.clientY;
        elemento.addEventListener('mousemove',dibujar);
    }else{
        document.exitPointerLock();
        elemento.removeEventListener('mousemove',dibujar);
        mensajeinicio();
    }
}

function mensajeinicio() {
    canvas.clearRect(0,0,500,400);
    canvas.font = "bold 30px verdana, sans-serif";
    canvas.fillText('Click para comenzar',120,180);
}

addEventListener('load',iniciar);