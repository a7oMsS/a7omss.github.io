
document.getElementById("btn1").addEventListener("mouseenter", function cambiarDivisor(){
    var bar = document.getElementById("bar1")
    bar.style.borderLeftColor = "white"
    bar.style.boxShadow = "0 0 1px 0 rgba(0, 0, 0, 0.5)"
});
document.getElementById("btn2").addEventListener("mouseenter", function cambiarDivisor(){
    var bar = document.getElementById("bar1")
    bar.style.borderLeftColor = "white"
    bar.style.boxShadow = "0 0 1px 0 rgba(0, 0, 0, 0.5)"
    var bar = document.getElementById("bar2")
    bar2.style.borderLeftColor = "white"
    bar2.style.boxShadow = "0 0 1px 0 rgba(0, 0, 0, 0.5)"
});
document.getElementById("btn3").addEventListener("mouseenter", function cambiarDivisor(){
    var bar = document.getElementById("bar2")
    bar2.style.borderLeftColor = "white"
    bar2.style.boxShadow = "0 0 1px 0 rgba(0, 0, 0, 0.5)"
});
document.getElementById("btn1").addEventListener("mouseleave", function cambiarDivisor(){
    var bar = document.getElementById("bar1")
    bar.style.borderLeftColor = "#bebdbd"
    bar.style.boxShadow = "0 0 1px 0 rgba(255, 255, 255, 0.5)"
});
document.getElementById("btn2").addEventListener("mouseleave", function cambiarDivisor(){
    var bar = document.getElementById("bar1")
    bar.style.borderLeftColor = "#bebdbd"
    bar.style.boxShadow = "0 0 1px 0 rgba(255, 255, 255, 0.5)"
    var bar = document.getElementById("bar2")
    bar2.style.borderLeftColor = "#bebdbd"
    bar2.style.boxShadow = "0 0 1px 0 rgba(255, 255, 255, 0.5)"
});

document.getElementById("btn3").addEventListener("mouseleave", function cambiarDivisor(){
    var bar = document.getElementById("bar2")
    bar2.style.borderLeftColor = "#bebdbd"
    bar2.style.boxShadow = "0 0 1px 0 rgba(255, 255, 255, 0.5)"
});

    document.querySelectorAll('.InfoInicio').forEach(function(contenido) {
    contenido.addEventListener('click', function() {
        this.classList.toggle('mostrar');
        var elementoInterno = this.querySelector('.indicador');
        elementoInterno.classList.toggle('mostrar2');
        if (elementoInterno.classList.contains('mostrar2')) {
            elementoInterno.innerHTML = ''; // Cuando la clase mostrar2 está activa
        } else {
            elementoInterno.innerHTML = '▷'; // Cuando la clase mostrar2 está inactiva
        }
    });
});