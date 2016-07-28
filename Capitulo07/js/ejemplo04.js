function iniciar() {
    var cue;
    var cues = [
        {comienzo: 2.000, fin: 7.000, texto: "Hola, holita" },
        {comienzo: 10.000, fin: 15.000, texto: "esto mola mucho, chachi"},
        {comienzo: 15.001, fin: 20.000, texto: "agregar subtitulos"},
        {comienzo: 20.001, fin: 25.000, texto: "a una pista"},
        {comienzo: 27.000, fin: 30.000, texto: "Hasta pronto"},
    ];
    var video = document.getElementById('medio');
    //agregamos una nueva pista al video 
    var nuevaPista = video.addTextTrack('subtitles');
    nuevaPista.mode= 'showing';
    for(var i = 0; i < cues.length; i++){
        cue = new VTTCue(cues[i].comienzo,cues[i].fin,cues[i].texto);
        nuevaPista.addCue(cue);
    }
    video.play();
}

addEventListener('load',iniciar);