function iniciar(){
    navigator.webkitGetUserMedia({video:true},exito,mostrarerror);
}

function exito(stream) {
    var video = document.getElementById('medio');
    video.setAttribute('src', URL.createObjectURL(stream));
    video.play();

    var cajaDatos = document.getElementById('cajaDatos');
    var videoTracks = stream.getVideoTracks();
    var pista = videoTracks[0];
    cajaDatos.innerHTML = '<br> Activado: ' + pista.enabled;
    cajaDatos.innerHTML = '<br> Tipo: ' + pista.kind;
    cajaDatos.innerHTML = '<br> Dispositivo: ' + pista.label;
}

function mostrarerror(e){
    console.log(e.code);
}

addEventListener('load',iniciar);