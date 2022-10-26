// Forma 01 - Tradicional
function printName() {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

// Forma 02 - Tradicional
const printName2 = function () {
  const myName2 = 'Lucas';
  return myName2;
};

console.log(printName2());

// Forma 03 - arrow functions
const printName3 = () => {
  const myName3 = 'Lucas';
  return myName3;
};

console.log(printName3());