// Clase Array2D representa una matriz 2D
class arrays {
  constructor(filas, columnas) {
    // Número de filas
    this.filas = filas;
    // Número de columnas
    this.columnas = columnas;
    // Matriz 2D inicializada con ceros
    this.matriz = new Array(filas);

    // Llenar cada fila con un arreglo de ceros
    for (let indice = 0; indice < filas; indice++) {
      this.matriz[indice] = new Array(columnas).fill(0);
    }
  }

  // Método para obtener un elemento de la matriz
  obtenerElemento(fila, columna) {
    return this.matriz[fila][columna];
  }

  // Método para establecer un valor en una posición específica de la matriz
  establecerElemento(fila, columna, valor) {
    this.matriz[fila][columna] = valor;
  }

  // Método para imprimir la matriz en la consola
  imprimirMatriz() {
    for (let indice = 0; indice < this.filas; indice++) {
      console.log(this.matriz[indice].join(', '));
    }
  }
}

// Crear una instancia de la matriz 2D de 3x3
const matriz2D = new Array2D(3, 3);
// Establecer algunos valores en la matriz
matriz2D.establecerElemento(0, 0, 1);
matriz2D.establecerElemento(1, 1, 2);
matriz2D.establecerElemento(2, 2, 3);

// Imprimir la matriz en la consola
matriz2D.imprimirMatriz();