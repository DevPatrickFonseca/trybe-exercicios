// Case 01 - Se existe pessoa com cargo 'Gerência'

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verificaCargo);

// Case 02 - Se existe uma pessoa com o cargo de 'Product Owner'

const pessoas2 = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo2 = pessoas2.some((pessoa2) => pessoa2.cargo === 'Product Owner');

console.log(verificaCargo2);

// Case 03 - Se existe algum nome que comece com a letra desejada

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames));
console.log(verifyFirstLetter('X', listNames));

// Case 04 - FIXAR - Pessoas convidadas

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name); 
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// Case 05 - FIXAR - Pessoas com determinada faixa de idade

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => person.age >= minimumAge);
};

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));