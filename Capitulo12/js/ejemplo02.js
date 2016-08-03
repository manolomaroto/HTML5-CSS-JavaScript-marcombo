var canvas;

function iniciar() {
    var elemento = document.getElementById('canvas');
    canvas = elemento.getContext('2d');
    elemento.addEventListener('click',bloquearraton);
    elemento.addEventListener('mousemove', dibujar);
}

function dibujar(e) {
    canvas.clearRect(0,0,500,400);
    var posX = e.clientX;
    var posY = e.clientY;

    canvas.beginPath();
    canvas.moveTo(posX,posY-20);
    canvas.lineTo(posX,posY + 20);
    canvas.moveTo(posX -20, posY);
    canvas.lineTo(posX + 20, posY);
    canvas.moveTo(posX +20, posY);
    canvas.arc(posX, posY, 20, 0, Math.PI * 2);
    canvas.stroke();
}

function bloquearraton(e){
    var elemento = e.target;
    if(!document.pointerLockElement){
        elemento.requestPointerLock();
    }else{
        document.exitPointerLock();
    }
}
addEventListener('load',iniciar);