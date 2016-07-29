var video, reproductor;

function iniciar() {
    video = document.getElementById('medio');
    reproductor = document.getElementById('reproductor');
    reproductor.addEventListener('click',pantallacompleta);
}

function pantallacompleta() {
    if(!document.webkitFullscreenElement){
        reproductor.webkitRequestFullscreen();
        video.play();
    }else{
        document.webkitExitFullscreen();
        video.pause();
    }
}