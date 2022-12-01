// Case 01
const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

// dados.filter((item) => console.log(item)); // Elementos do dados

const somenteStrings = dados.filter((item) => typeof item === 'string');
console.log(somenteStrings); // Somente strings

// Case 02
const listaNumeros = [10, 20, 30, 40];

// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((item) => item > 20);

console.log(maiorVinte);

// Case 03

const arr = ['Ana', 'Pedro', 'Giovana'];

// arr.filter((element) => console.log(element)); // Dados da arr

arr.filter((element, index, array) => console.log('Elemento:', element, 'Índice:', index, 'Array:', array)); // Elemento com array

const filtroAna = arr.filter((element) => element === 'Ana');
console.log(filtroAna); // Array Ana de arr

// Case 04
const notaEstudantes = [
  {
    nome: 'Joicy',
    nota: 100
  },
  {
    nome: 'Ronald',
    nota: 50
  },
  {
    nome: 'Joel',
    nota: 80
  },
  {
    nome: 'Ana',
    nota: 90
  },
  {
    nome: 'Carol',
    nota: 70
  },
];

notaEstudantes.filter((element) => console.log(element)); // Saida dos elementos

const estudantesAprovados = notaEstudantes.filter((pessoa) => pessoa.nota >= 80);
console.log(estudantesAprovados); // Saida em array

const estudantesNaoAprovados = notaEstudantes.filter((pessoa) => !pessoa.nota >= 80);
console.log(estudantesAprovados); // Saida em array