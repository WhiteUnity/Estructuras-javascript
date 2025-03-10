/**
 * Representa un nodo en una lista enlazada.
 * Cada nodo almacena un valor y una referencia al siguiente nodo en la secuencia.
 * 
 * @class
 * @param {any} value - Valor a almacenar en el nodo
 * @param {Node|null} next - Referencia al siguiente nodo (null por defecto)
 */
class Node {
  /**
   * @constructor
   * @param {any} value - Valor del nodo
   * @param {Node|null} next - Nodo siguiente en la lista (default: null)
   */
  constructor(value, next = null) {
    /**
     * @property {any} value - Valor almacenado en el nodo
     */
    this.value = value;

    /**
     * @property {Node|null} next - Referencia al siguiente nodo
     */
    this.next = next;
  }
}
