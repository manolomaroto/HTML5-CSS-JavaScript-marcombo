function iniciar() {
    var lista = "";
    var info = document.getElementById("info");
    var mipista = document.getElementById("mipista");
    var obj = mipista.track;
    lista += "<br>Tipo:" + obj.kind;
    lista += "<br>Etiqueta: " + obj.label;
    lista += "<br>Lenguaje: " + obj.language;

    info.innerHTML = lista;
}

addEventListener('load',iniciar);