// Seu time recebeu a tarefa de desenvolver um código que realize operações aritméticas. Você ficou responsável por criar uma função que some dois valores/

// Caso 01

function sum(value1, value2) {
  return value1 + value2;
}

console.log(sum(2, 3)); // resultado: 5

// Caso 02

const sum = (value1, value2) => {
  return value1 + value2
};

console.log(sum(2, '3')); // resultado: 23 ????

// Exercicio 01 - Adicionando novas Chaves

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};
