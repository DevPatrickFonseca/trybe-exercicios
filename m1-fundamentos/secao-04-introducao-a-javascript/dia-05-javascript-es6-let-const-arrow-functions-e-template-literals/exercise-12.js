// Caso 01 - Situação ideal para o Operador Ternário
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

console.log(checkIfElse(25));


const checkTernary = (age1) => (
  age1 >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);

console.log(checkTernary(25));