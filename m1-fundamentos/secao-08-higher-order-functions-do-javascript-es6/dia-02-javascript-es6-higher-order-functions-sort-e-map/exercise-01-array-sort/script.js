
// Case 01

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();

console.log(food);

// Case 02

const inventory1 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory1.sort();

console.log(inventory1);

// Case 03 - Crescente

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory2.sort((a, b) => a - b);

console.log(inventory2);

// Case 04 - Decrescente

const inventory3 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory3.sort((a, b) => b - a);

console.log(inventory3);
