function maiorNumero(num1,num2) {
  if (num1 > num2) {
    return "O número " + num1 + " é maior que o " + num2;
  } else {
    return "O número " + num2 + " é maior que o " + num1;
  }
}

console.log(maiorNumero(12,25));