// Case 01 - Método com FOR

const persons1 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames1 = [];

for (let index = 0; index < persons1.length; index += 1) {
  fullNames1.push(`${persons1[index].firstName} ${persons1[index].lastName}`);
}

console.log(fullNames1);

//  Case 02 - Método com MAP

const persons2 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons2.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2);

// Case 03 - Usando MAP

const numbers1 = [1, 2, 3, 4, -5];

const negativeNumbers1 = numbers1.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers1);
console.log(numbers1);

// Case 04 - Usando FOR

const numbers2 = [1, 2, 3, 4, -5];

const negativeNumbers2 = [];
for (let index = 0; index < numbers2.length; index += 1) {
  if (numbers2[index] > 0) {
    negativeNumbers2.push(numbers2[index] * -1);
  } else {
    negativeNumbers2.push(numbers2[index]);
  }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers2); // [ 1, 2, 3, 4, -5 ]

// Case 05 - Lista de preços

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);

// Case 06 - 

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); 
// Retorna uma array novo sem modifical o original

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco);
// Retorna apenas os numeros menores que 5
