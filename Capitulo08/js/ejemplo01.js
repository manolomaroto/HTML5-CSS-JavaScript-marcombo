var video;

function iniciar() {
    video = document.getElementById('medio');
    medio.addEventListener('click',pantallaCompleta);
}

function pantallaCompleta(){
    if(!document.mozfullscreenElement){

        video.mozrequestFullscreen;
        video.play();
    }
}

addEventListener('load',iniciar);