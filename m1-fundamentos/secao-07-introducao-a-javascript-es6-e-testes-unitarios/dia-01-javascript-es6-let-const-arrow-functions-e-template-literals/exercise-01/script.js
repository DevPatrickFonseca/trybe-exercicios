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

// Exercicio 01.2 - Adicionando novas Chaves

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1.firstName);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2['firstName']);

// Exercicio 01.3 - Nova Propriedade

objeto.novaPropriedade = 'valor';

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);
customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

// Exercicio 01.4

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor
};

adicionaPropriedade(customer, newKey, lastName);
console.log(customer);

newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;

adicionaPropriedade(customer, newKey, fullName);
console.log(customer);

// ----

//? função responsável por adicionar as propriedades novas

const pessoaEstudante = {};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor
};

//? Executar a função passando como parâmetro o objeto a ser editado, o nome das propriedades e seus respectivos valores

adicionaPropriedade(pessoaEstudante, `nome`, `Fulano da Silva`);
adicionaPropriedade(pessoaEstudante, `email`, `exemplo-fulano.silva@email.com`);
adicionaPropriedade(pessoaEstudante, `telefone`, `11 1111-1111`);
adicionaPropriedade(pessoaEstudante, `github`, `github.com/exemplo-fulano-da-silva`);
adicionaPropriedade(pessoaEstudante, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);

