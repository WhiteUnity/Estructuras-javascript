/**
 * Implementación de una lista enlazada simple.
 * Permite operaciones básicas de inserción, búsqueda, eliminación y recorrido.
 * 
 * @class
 */
class LinkedList {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @property {Node|null} head - Primer nodo de la lista
     */
    this.head = null;
  }

  /**
   * Inserta un nuevo nodo al final de la lista.
   * Complejidad temporal: O(n)
   * 
   * @param {any} value - Valor a insertar
   */
  insertNode(value) {
    const newNode = new Node(value);
    
    // Caso: Lista vacía
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Recorrer hasta el último nodo
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    
    current.next = newNode;
  }

  /**
   * Busca un nodo por su valor.
   * Complejidad temporal: O(n)
   * 
   * @param {any} value - Valor a buscar
   * @returns {Node|null} - Nodo encontrado o null
   */
  findNode(value) {
    let current = this.head;
    
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    
    return null;
  }

  /**
   * Elimina la primera ocurrencia de un nodo con el valor especificado.
   * Complejidad temporal: O(n)
   * 
   * @param {any} value - Valor a eliminar
   */
  deleteNode(value) {
    // Caso: Eliminar la cabeza
    if (this.head?.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current?.next) {
      if (current.next.value === value) {
        current.next = current.next.next; // Saltar el nodo a eliminar
        return;
      }
      current = current.next;
    }
  }

  /**
   * Muestra los valores de la lista en la consola.
   * Complejidad temporal: O(n)
   */
  display() {
    let current = this.head;
    const values = [];
    
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    
    console.log(`Lista: [${values.join(' -> ')}]`);
  }
}
