const LinkedList = require('./LinkedList');

// Crear lista
const lista = new LinkedList();

// Insertar valores
lista.insertNode(10);
lista.insertNode(20);
lista.insertNode(30);
lista.display(); // Lista: [10 -> 20 -> 30]

// Buscar un valor
console.log("¿Existe el 20?", lista.findNode(20) ? "Sí" : "No"); // Sí

// Eliminar un valor
lista.deleteNode(20);
lista.display(); // Lista: [10 -> 30]

// Buscar de nuevo
console.log("¿Existe el 20?", lista.findNode(20) ? "Sí" : "No"); // No
