function iniciar(){
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');

    //creamos el elemento al que añadiremos el gradiente
    var grad = canvas.createLinearGradient(0,100,300,100);
    grad.addColorStop(0.5,'#0AF');
    grad.addColorStop(1,'#000');
    canvas.fillStyle=grad;
    canvas.fillRect(10,10,100,100);
    canvas.fillRect(150,10,200,100);
}

addEventListener('load',iniciar);