function iniciar() {
    navigator.webkitGetUserMedia({video:true},exito,mostrarerror);

}

function exito(stream) {
    var video = document.getElementById('medio');
    video.setAttribute('src',URL.createObjectURL(stream));
    video.play();
}

function mostrarerror(e) {
    console.log(e.code);
}

addEventListener('load',iniciar);