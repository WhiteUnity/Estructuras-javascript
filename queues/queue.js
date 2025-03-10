class Cola {
  constructor() {
    // Arreglo para almacenar los elementos de la cola
    this.elementos = [];
  }

  // Método para agregar un elemento al final de la cola
  encolar(elemento) {
    // Agregar el elemento al final del arreglo
    this.elementos.push(elemento);
  }

  // Método para eliminar y retornar el primer elemento de la cola
  desencolar() {
    // Eliminar y retornar el primer elemento del arreglo
    return this.elementos.shift();
  }

  // Método para ver el primer elemento de la cola sin eliminarlo
  verPrimero() {
    // Retornar el primer elemento del arreglo
    return this.elementos[0];
  }
}