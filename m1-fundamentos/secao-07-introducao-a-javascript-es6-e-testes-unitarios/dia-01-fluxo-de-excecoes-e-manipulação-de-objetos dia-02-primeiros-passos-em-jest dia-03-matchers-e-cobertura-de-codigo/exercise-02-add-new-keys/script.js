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

// Part 01 - função responsável por adicionar as propriedades novas.

const pessoaEstudante = {};

// Part 02 - função passando como parâmetro o objeto a ser editado, o nome das propriedades e seus respectivos valores.

adicionaPropriedade(pessoaEstudante, `nome`, `Fulano da Silva`);
adicionaPropriedade(pessoaEstudante, `email`, `exemplo-fulano.silva@email.com`);
adicionaPropriedade(pessoaEstudante, `telefone`, `11 1111-1111`);
adicionaPropriedade(pessoaEstudante, `github`, `github.com/exemplo-fulano-da-silva`);
adicionaPropriedade(pessoaEstudante, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);

console.log(pessoaEstudante);
