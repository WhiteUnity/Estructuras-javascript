// Clase que representa un nodo en la lista enlazada
class Nodo {
  constructor(valor, siguiente) {
    this.valor = valor; // Almacena el valor del nodo
    this.siguiente = siguiente; // Referencia al siguiente nodo en la lista (null si es el último)
  }
}

// Clase que representa una lista enlazada
class ListaEnlazada {
  constructor() {
    this.cabeza = null; // Inicializa la lista con cabeza = null (lista vacía)
  }

  // Método para insertar un nuevo nodo al final de la lista
  insertarNodo(valor) {
    const nuevoNodo = new Nodo(valor, null); // Crea un nuevo nodo con el valor proporcionado
    if (this.cabeza === null) {
      // Si la lista está vacía, el nuevo nodo se convierte en la cabeza (cabeza)
      this.cabeza = nuevoNodo;
      return;
    }

    // Si la lista no está vacía, recorre hasta el último nodo
    let actual = this.cabeza;
    while (actual.siguiente) {
      actual = actual.siguiente;
    }
    // Una vez en el último nodo, asigna el nuevo nodo como su siguiente nodo
    actual.siguiente = nuevoNodo;
  }

  // Método para buscar un nodo con un valor específico
  buscarNodo(valor) {
    let actual = this.cabeza; // Comienza desde la cabeza de la lista
    while (actual) {
      if (actual.valor === valor) {
        // Si encuentra un nodo con el valor buscado, lo devuelve
        return actual;
      }
      actual = actual.siguiente; // Avanza al siguiente nodo
    }
    return null; // Si no encuentra el valor, devuelve null
  }

  // Método para eliminar un nodo con un valor específico
  eliminarNodo(valor) {
    if (this.cabeza.valor === valor) {
      // Si el nodo a eliminar es la cabeza, mueve la cabeza al siguiente nodo
      this.cabeza = this.cabeza.siguiente;
      return;
    }

    // Si el nodo a eliminar no es la cabeza, recorre la lista
    let actual = this.cabeza;
    while (actual.siguiente) {
      if (actual.siguiente.valor === valor) {
        // Si encuentra el nodo a eliminar, ajusta el puntero siguiente del nodo anterior
        actual.siguiente = actual.siguiente.siguiente;
        return;
      }
      actual = actual.siguiente; // Avanza al siguiente nodo
    }
  }

  // Método para mostrar todos los valores de la lista
  mostrar() {
    let actual = this.cabeza; // Comienza desde la cabeza de la lista
    while (actual) {
      console.log(actual.valor); // Imprime el valor del nodo actual
      actual = actual.siguiente; // Avanza al siguiente nodo
    }
  }
}

// Ejemplo de uso:
const lista = new ListaEnlazada();
lista.insertarNodo(10); // Inserta 10
lista.insertarNodo(20); // Inserta 20
lista.insertarNodo(30); // Inserta 30
lista.mostrar(); // Muestra: 10, 20, 30

console.log(lista.buscarNodo(20)); // Busca y devuelve el nodo con valor 20
lista.eliminarNodo(20); // Elimina el nodo con valor 20
lista.mostrar(); // Muestra: 10, 30
