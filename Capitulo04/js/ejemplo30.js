function iniciar(){
    var elem = document.getElementById('principal');
    var nuevoelemento = document.createElement('p');
    elem.appendChild(nuevoelemento);
    nuevoelemento.textContent = "Hola mundo";
}
addEventListener('load', iniciar);