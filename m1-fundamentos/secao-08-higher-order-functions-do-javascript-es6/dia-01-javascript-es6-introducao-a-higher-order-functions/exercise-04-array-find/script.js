// git commit -m "Exercício "

// Case 01 - 

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((idade) => idade < 20));
console.log(idades.find((idade) => idade > 50));
console.log(idades.find((idade) => idade === 33));

// Case 02 - Primeiro número do array que é divisível por 3 e 5

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((number) => number % 2 === 0);

console.log(verifyNumbers);

// Case 03 - Primeiro nome com cinco letras

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters());

// Case 04 - Música com id igual a '31031685'

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = musicas.find((musica) => musica.id === '31031685');

console.log(findMusic);