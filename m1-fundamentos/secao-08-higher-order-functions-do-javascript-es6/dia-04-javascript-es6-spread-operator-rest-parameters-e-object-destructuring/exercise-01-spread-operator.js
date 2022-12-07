// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacate', 'figo', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'manga', 'amora'];

const fruitSalad = (fruit, additional) => {
  const mixedItens = [...fruit, ...additional];
  return mixedItens;
};

console.log(fruitSalad(specialFruit, additionalItens));