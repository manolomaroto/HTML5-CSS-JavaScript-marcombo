function iniciar() {
    navigator.webkitGetUserMedia({video:true},exito,mostrarerror);

}

function exito(stream) {
    var boton = document.getElementById('boton');
    boton.addEventListener('click',function(){
        detenerstream(stream);
    });
    var video = document.getElementById('medio');
    video.setAttribute('src', URL.createObjectURL(stream));
    video.play();
}

function mostrarerror(e){
    console.log(e.code);
}

function detenerstream(stream) {
    
    stream.getTracks().forEach(function (track) { track.stop(); });
    alert('La transmisión fue cancelada');
}

addEventListener('load', iniciar);