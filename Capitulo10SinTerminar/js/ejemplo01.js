function iniciar() {
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');

    //dibujando
    canvas.strokeRect(100,100,120,120);
    canvas.fillRect(110,110,100,100);
    canvas.clearRect(120,120,80,80);
}

addEventListener('load',iniciar);