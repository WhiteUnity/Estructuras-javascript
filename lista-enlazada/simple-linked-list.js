class Nodo {
  constructor(valor, siguiente) {
    // Valor del nodo
    this.valor = valor;
    // Referencia al siguiente nodo
    this.siguiente = siguiente;
  }
}

class ListaEnlazada {
  constructor() {
    // Cabeza de la lista enlazada
    this.cabeza = null;
<<<<<<< Tabnine <<<<<<<
  /**//+
   * Retrieves an element from the 2D matrix at the specified position.//+
   *//+
   * @param {number} fila - The row index of the element to retrieve.//+
   * @param {number} columna - The column index of the element to retrieve.//+
   * @returns {*} The element at the specified position in the matrix.//+
   *///+
  obtenerElemento(fila, columna) {//+
    return this.matriz[fila][columna];//+
  }//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"1fec1202-76a7-467e-b6b6-6c4868820931","source":"instruct"}
  }

  // Método para insertar un nodo al final de la lista
  insertarNodo(valor) {
    // Crear un nuevo nodo con el valor dado
    const nuevoNodo = new Nodo(valor, null);
    // Si la cabeza es null, el nuevo nodo se convierte en la cabeza
    if (this.cabeza === null) {
      this.cabeza = nuevoNodo;
      return;
    }

    // Si no, recorrer la lista hasta encontrar el último nodo
    let actual = this.cabeza;
    while (actual.siguiente) {
      actual = actual.siguiente;
    }
    // Insertar el nuevo nodo al final de la lista
    actual.siguiente = nuevoNodo;
  }

  // Método para encontrar un nodo con un valor específico
  encontrarNodo(valor) {
    let actual = this.cabeza;
    // Recorrer la lista hasta encontrar el nodo con el valor dado
    while (actual) {
      if (actual.valor === valor) {
        return actual;
      }
      actual = actual.siguiente;
    }
    // Si no se encuentra el nodo, retornar null
    return null;
  }

  // Método para eliminar un nodo con un valor específico
  eliminarNodo(valor) {
    // Si el nodo a eliminar es la cabeza
    if (this.cabeza.valor === valor) {
      this.cabeza = this.cabeza.siguiente;
      return;
    }
    let actual = this.cabeza;
    // Recorrer la lista hasta encontrar el nodo anterior al nodo a eliminar
    while (actual.siguiente) {
      if (actual.siguiente.valor === valor) {
        // Eliminar el nodo
        actual.siguiente = actual.siguiente.siguiente;
        return;
      }
      actual = actual.siguiente;
    }
  }

  // Método para mostrar todos los valores de la lista
  mostrar() {
    let actual = this.cabeza;
    // Recorrer la lista y mostrar cada valor
    while (actual) {
      console.log(actual.valor);
      actual = actual.siguiente;
    }
  }
}