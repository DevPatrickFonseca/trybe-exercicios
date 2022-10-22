let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior;

for (let index = 0; index < numbers.length; index += 1) {
  (numbers[index]);
  if (index === 0) {
    maior = numbers[index];
  } else if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log("O valor maior é o " + maior);