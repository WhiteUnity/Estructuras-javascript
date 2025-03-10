// Clase Node representa un nodo en el árbol binario
class Node {
  constructor(value) {
    // Valor del nodo
    this.value = value;
    // Hijo izquierdo del nodo
    this.left = null;
    // Hijo derecho del nodo
    this.right = null;
  }
}

// Clase BinaryTree representa el árbol binario
class BinaryTree {
  constructor() {
    // Raíz del árbol
    this.root = null;
  }

  // Método para insertar un valor en el árbol
  insert(value) {
    // Crear un nuevo nodo con el valor dado
    const newNode = new Node(value);

    // Si la raíz es null, el nuevo nodo se convierte en la raíz
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Si no, insertar el nuevo nodo en la posición correcta
    this.insertNode(this.root, newNode);
  }

  // Método auxiliar para insertar un nodo en la posición correcta
  insertNode(node, newNode) {
    // Si el valor del nuevo nodo es menor que el valor del nodo actual
    if (newNode.value < node.value) {
      // Si el hijo izquierdo es null, insertar aquí el nuevo nodo
      if (node.left === null) {
        node.left = newNode;
        return;
      }

      // Si no, continuar buscando en el subárbol izquierdo
      this.insertNode(node.left, newNode);
    } else {
      // Si el valor del nuevo nodo es mayor o igual que el valor del nodo actual
      // Si el hijo derecho es null, insertar aquí el nuevo nodo
      if (node.right === null) {
        node.right = newNode;
        return;
      }

      // Si no, continuar buscando en el subárbol derecho
      this.insertNode(node.right, newNode);
    }
  }

  // Método para realizar un recorrido en orden (inorder traversal)
  inorder(node = this.root) {
    // Si el nodo no es null
    if (node != null) {
      // Recorrer el subárbol izquierdo
      this.inorder(node.left);
      // Imprimir el valor del nodo
      console.log(node.value);
      // Recorrer el subárbol derecho
      this.inorder(node.right);
    }
  }
}

// Crear una instancia del árbol binario
const binaryTree = new BinaryTree();
// Insertar valores en el árbol
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(2);
binaryTree.insert(4);

// Imprimir el orden de recorrido
console.log('Traversal order');
binaryTree.inorder();