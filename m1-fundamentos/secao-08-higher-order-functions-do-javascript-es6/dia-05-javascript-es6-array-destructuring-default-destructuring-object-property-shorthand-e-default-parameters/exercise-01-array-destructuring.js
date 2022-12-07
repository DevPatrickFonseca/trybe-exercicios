// Exercício 01 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]); // Modo 01

const [primeFirst, primeSecond, primeThird] = primeNumbers;

sum(primeFirst, primeThird); // Modo 02