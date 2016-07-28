function iniciar() {
    var lista = "";
    var info = document.getElementById('info');
    var mipista = document.getElementById('mipista');
    var obj = mipista.track;
    var miscues = obj.cues;
    console.log(miscues.length)
    for(var i = 0; i < miscues.length; i++){
        lista += miscues[i].text + "<br>";
    }
    info.innerHTML = lista;
}

addEventListener('load',iniciar);