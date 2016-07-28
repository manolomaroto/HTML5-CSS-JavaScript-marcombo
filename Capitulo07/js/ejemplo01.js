function iniciar(){
    var video = document.getElementById('medio');

    var pista1= video.textTracks[0];
    var mipista = document.getElementById('mipista');
    var pista2 = mipista.track;

    console.log(pista1);
    console.log(pista2);
}

addEventListener('load',iniciar);