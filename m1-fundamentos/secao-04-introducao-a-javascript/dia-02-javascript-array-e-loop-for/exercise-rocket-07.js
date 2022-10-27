let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor;

for (let index = 0; index < numbers.length; index += 1) {
  (numbers[index]);
  if (index === 0) {
    menor = numbers[index];
  } else if (numbers[index] < menor) {
    menor = numbers[index];
  }
}

console.log("O valor menor é o " + menor);