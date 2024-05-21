function alternarElementos(id) {
  var paneles = document.querySelectorAll("t");
  paneles.forEach(function(elemento){
    elemento.hidden = true;
  });

  document.getElementById(id).hidden = false;
}

function paginaPrincipal(){
    window.location.href = 'index.html';
}

function showText() {
  const urlParams = new URLSearchParams(window.location.search);
  const textId = urlParams.get('text');

  var paneles = document.querySelectorAll("t");
  paneles.forEach(function(elemento){
    elemento.hidden = true;
  });

  if (textId) {
      const textElement = document.getElementById(textId);
      if (textElement) {
          textElement.hidden = false;
      }
  }
}


const respuestasCorrectas1 = [5, 180, 10, 6, 4, 8, 19.6, 0.98, 4.9, 5.2, 5, 29.4];

function verificarRespuesta(id, indice) {
    let respuesta = document.getElementById(id).value;
    let resultado = respuestasCorrectas1[indice];
    if (respuesta == resultado) {
        alert("Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta es " + resultado);
    }
}

