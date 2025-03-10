class Pila {
  constructor() {
    // Arreglo para almacenar los elementos de la pila
    this.elementos = [];
  }

  // Método para agregar un elemento a la pila
  apilar(elemento) {
    // Agregar el elemento al final del arreglo
    this.elementos.push(elemento);
  }

  // Método para eliminar y retornar el último elemento de la pila
  desapilar() {
    // Eliminar y retornar el último elemento del arreglo
    return this.elementos.pop();
  }

  // Método para ver el último elemento de la pila sin eliminarlo
  verUltimo() {
    // Retornar el último elemento del arreglo
    return this.elementos[this.elementos.length - 1];
  }
}