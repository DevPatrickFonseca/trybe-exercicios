function positivoNegativo(num) {
  if (num > 0) {
    return "O número " + num + " é POSITIVO";
  } else if (num < 0) {
    return "O número " + num + " é NEGATIVO";
  } else {
    return "Número ZERO";
  }
}

console.log(positivoNegativo(23));
console.log(positivoNegativo(-23));
console.log(positivoNegativo(0));