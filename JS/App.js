let app = new Vue({
    el: "#app",
  data:{
    figuras2D: [
      { nombre: "Círculo", inputs: [{ id: "radio", label: "Radio" }], tipo: "2D", imagen: "imgs/circulo.png" },
      { nombre: "Triángulo", inputs: [{ id: "base", label: "Base" }, { id: "altura", label: "Altura" }], tipo: "2D", imagen: "imgs/triangulo.png" },
      { nombre: "Rectángulo", inputs: [{ id: "largo", label: "Largo" }, { id: "ancho", label: "Ancho" }], tipo: "2D", imagen: "imgs/rectangulo.png" },
      { nombre: "Cuadrado", inputs: [{ id: "lado", label: "Lado" }], tipo: "2D", imagen: "imgs/cuadrado.png" },
      { nombre: "Pentágono", inputs: [{ id: "lado", label: "Lado" }, { id: "apotema", label: "Apotema" }], tipo: "2D", imagen: "imgs/pentagono.png" }
    ],
    // Figuras tridimensionales (Volumen)
    figuras3D: [
      { nombre: "Esfera", inputs: [{ id: "radio", label: "Radio" }], tipo: "3D", imagen: "imgs/esfera.png" },
      { nombre: "Cubo", inputs: [{ id: "lado", label: "Lado" }], tipo: "3D", imagen: "imgs/cubo.png" },
      { nombre: "Cilindro", inputs: [{ id: "radio", label: "Radio" }, { id: "altura", label: "Altura" }], tipo: "3D", imagen: "imgs/cilindro.png" },
      { nombre: "Cono", inputs: [{ id: "radio", label: "Radio" }, { id: "altura", label: "Altura" }], tipo: "3D", imagen: "imgs/cono.png" }
    ],
    figuraSeleccionada: null,
    valores: {},
    resultado: null
},
methods: {
  seleccionarFigura(figura) {
    this.figuraSeleccionada = figura;
    this.valores = {};
    this.resultado = null;
  },
  calcular() {
    const inputs = this.valores;
    let resultado = 0;

    if (this.figuraSeleccionada.tipo === "2D") {
      // Cálculo de áreas para figuras bidimensionales
      switch (this.figuraSeleccionada.nombre) {
        case "Círculo":
          resultado = Math.PI * Math.pow(inputs.radio, 2);
          break;
        case "Triángulo":
          resultado = (inputs.base * inputs.altura) / 2;
          break;
        case "Rectángulo":
          resultado = inputs.largo * inputs.ancho;
          break;
        case "Cuadrado":
          resultado = Math.pow(inputs.lado, 2);
          break;
        case "Pentágono":
          resultado = (5 * inputs.lado * inputs.apotema) / 2;
          break;
        default:
          resultado = 0;
      }
    } else {
      // Cálculo de volúmenes para figuras tridimensionales
      switch (this.figuraSeleccionada.nombre) {
        case "Esfera":
          resultado = (4 / 3) * Math.PI * Math.pow(inputs.radio, 3);
          break;
        case "Cubo":
          resultado = Math.pow(inputs.lado, 3);
          break;
        case "Cilindro":
          resultado = Math.PI * Math.pow(inputs.radio, 2) * inputs.altura;
          break;
        case "Cono":
          resultado = (1 / 3) * Math.PI * Math.pow(inputs.radio, 2) * inputs.altura;
          break;
        default:
          resultado = 0;
      }
    }

    this.resultado = resultado;
  },
  esTridimensional(figura) {
    return figura.tipo === "3D";
  }
}
});
