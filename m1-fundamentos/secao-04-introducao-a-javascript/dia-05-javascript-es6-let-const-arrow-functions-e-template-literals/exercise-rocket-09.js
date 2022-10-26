const circleArea = (raio) => {
  const pi = 3.14;

  let area = (raio * raio) * pi;
  return `Essa é a área do círculo: ${area}`;
}

console.log(circleArea(5));