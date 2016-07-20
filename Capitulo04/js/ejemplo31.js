function iniciar(){
    var elem = document.getElementById('principal');
    elem.insertAdjacentHTML('beforeend','<section>Hola mundo</section>');
}
addEventListener('load',iniciar);