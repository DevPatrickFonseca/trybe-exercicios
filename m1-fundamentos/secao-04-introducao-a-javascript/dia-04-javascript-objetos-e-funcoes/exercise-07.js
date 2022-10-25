let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let carro in car) {
  console.log(carro + " = " + car[carro]);
}