const resultSet = document.getElementById('resultado').hidden = true;
const selectSet = document.getElementById('seleccionar').hidden = false;

function mostrarResultado(texto) {
    document.getElementById('salida').innerText = texto;
    document.getElementById('resultado').hidden = false;
    document.getElementById('seleccionar').hidden = true;
}

// Función para volver al selectSet y ocultar resultSet
function volver() {
    document.getElementById('resultado').hidden = true;
    document.getElementById('seleccionar').hidden = false;
}

// 1. Creación y acceso:
// Crea un arreglo que contenga los nombres de tus 5 amigos.
// Imprime en consola el primer y último nombre.
// Cambia el nombre del segundo amigo.
function crearYAccederAmigos() {
    let amigos = ["Karim", "Aaron", "Francisco", "Zahid", "Fernando"];
    let mensaje = amigos.join(', ')+"\n";
    mensaje += "Primer amigo: "+amigos[0]+"\nÚltimo amigo:"+amigos[4]+"\n";
    amigos[1] = "Anayansi";
    mensaje = mensaje+"Arreglo actualizado: "+amigos.join(', ')
    mostrarResultado(mensaje);
}

// 2. Agregar y eliminar elementos:
// Crea un arreglo vacío para almacenar números.
// Agrega 5 números al arreglo utilizando push().
// Elimina el último número utilizando pop().
// Agrega un número al inicio del arreglo utilizando un shift().
function agregarYEliminarElementos() {
    let numeros = [];
    numeros.push(1, 2, 3, 4, 5);
    let mensaje = "Arreglo después de push: "+numeros.join(', ')+"\n";
    numeros.pop();
    mensaje += "Arreglo después de pop: "+numeros.join(', ')+"\n";
    numeros.unshift(0);
    mensaje += "Arreglo después de unshift: "+numeros.join(', ');

    mostrarResultado(mensaje);
}

// 3. Recorrer un arreglo:
// Crea un arreglo con los días de la semana.
// Recorre el arreglo e imprime cada día en una línea diferente.
function recorrerArreglo() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let mensaje="";
        mensaje += dias.join('\n')

    mostrarResultado(mensaje);
}

// 4. Buscar un elemento:
// Crea un arreglo de números.
// Busca un número específico dentro del arreglo y muestra su posición (índice).
// Si el número no se encuentra, muestra un mensaje.
function buscarElemento(numero) {
    let numeros = [3, 6, 9, 12, 15];
    let indice, encontrado;
    for (let i=0; i<numeros.length; i++){
    if (numeros[i]==numero) {
        indice=i;
        encontrado=true;
        i=numeros.length;
    } else {
        encontrado=false;
    }
}
    let mensaje = (`${encontrado ? "Número "+numero+" encontrado en el índice "+indice : "Número "+numero+" no se encuentra en el arreglo"}`);
    mostrarResultado(mensaje);
}

// 5. Ordenar un arreglo:
// Crea un arreglo de números desordenados.
// Ordénalas de menor a mayor utilizando sort().
// Ordénalas de mayor a menor.
function ordenarArreglo() {
    let numeros = [4, 2, 9, 7, 1, 5];
    let mensaje = "Arreglo original: "+numeros.join(', ')+"\n";
    numeros.sort((a, b) => a - b);
    mensaje +="Arreglo ordenado de menor a mayor: "+numeros.join(', ')+"\n";
    numeros.sort((a, b) => b - a);
    mensaje +="Arreglo ordenado de mayor a menor: "+numeros.join(', ');

    mostrarResultado(mensaje);
}

// 6. Filtrar elementos:
// Crea un arreglo de números.
// Filtra los números pares y guárdalos en un nuevo arreglo.
// Filtra los números mayores a 5.
function filtrarElementos() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let pares = numeros.filter(num => num % 2 === 0);
    let mensaje ="Números pares: "+pares.join(', ')+"\n";
    let mayores5 = numeros.filter(num => num > 5);
    mensaje +="Números mayores a 5: "+ mayores5.join(', ');

    mostrarResultado(mensaje);
}

// 7. Combinar arreglos:
// Crea dos arreglos de números.
// Combina ambos arreglos en uno solo.
// Elimina los elementos duplicados.
function combinarArreglos() {
    let arreglo1 = [1, 2, 3, 4];
    let mensaje = "Arreglo 1: "+arreglo1.join(', ')+"\n";
    let arreglo2 = [3, 4, 5, 6];
    mensaje += "Arreglo 2: "+arreglo2.join(', ')+"\n";
    let arregloCombinado = [...new Set([...arreglo1, ...arreglo2])];
    mensaje += "Arreglo combinado sin duplicados: "+arregloCombinado.join(', ');

    mostrarResultado(mensaje);
}
