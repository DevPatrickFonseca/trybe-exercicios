function maiorNumero(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
    return "O número " + num1 + " é maior que " + num2 + " e " + num3;
  } else if (num2 > num1 && num2 > num3) {
    return "O número " + num2 + " é maior que " + num1 + " e " + num3;
  } else {
    return "O número " + num3 + " é maior que " + num1 + " e " + num2;
  }
}

console.log(maiorNumero(12,25,28));